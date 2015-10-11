'use strict';

/**
 * Dependencies
 */
const extend = require('extend');

const gcal = require('../lib/google-calendar');
const render = require('../lib/render');
const geocode = require('../lib/geocode');
const timeline = require('../lib/timeline');
const CalendarEvent = require('../models/calendar-event');

/**
 * Expose index controller that shows the list of events
 */

module.exports = function * () {
  let events = yield fetchEvents();
  this.body = yield render('index', timeline(events));
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
