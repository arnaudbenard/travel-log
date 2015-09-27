'use strict';

/**
 * Dependencies
 */
const extend = require('extend');

const gcal = require('../lib/google-calendar');
const render = require('../lib/render');
const geocode = require('../lib/geocode');
const localTime = require('../lib/local-time');
const CalendarEvent = require('../models/calendar-event');

/**
 * Expose index controller that shows the list of events
 */

module.exports = function * () {
  let events = yield fetchEvents();
  const currentEvents = events.filter((event) => event.isCurrent);
  const futureEvents = events.filter((event) => !event.isCurrent);

  this.body = yield render('index', {
    events,
    currentEvents,
    futureEvents
  });
};

/**
 * Fetch events from google calendar
 */

function * fetchEvents () {
  let events = yield gcal.events();
  events = yield events.map(addCoordinates);
  return events.map(event => new CalendarEvent(event));
}

/**
 * Add longitude and latitude to the event
 */

function addCoordinates (event) {
  if (!event.location) {
    console.log('Event missing location', event);
  }

  return geocode(event.location || event.summary)
  .then(data => {
    const location = data.length > 0 ? data[0] : {};
    return extend(event, {
      latitude: location.latitude,
      longitude: location.longitude
    });
  });
}
