'use strict';

/**
 * Dependencies
 */
const extend = require('extend');

const gcal = require('../lib/google-calendar');
const render = require('../lib/render');
const geocode = require('../lib/geocode');
const CalendarEvent = require('../models/calendar-event');

/**
 * Expose index controller that shows the list of events
 */

module.exports = function * () {
  let events = yield gcal.events();
  events = yield events.map(addCoordinates);
  events = events.map(event => new CalendarEvent(event));
  this.body = yield render('index', {events});
};

/**
 * Add longitude and latitude to the event
 */

function addCoordinates (event) {
  if (!event.location) {
    console.log('Event missing location', event);
  }

  return geocode(event.location || event.summary)
  .then(data => {
    let latitude = data.length > 0 ? data[0].latitude : '';
    let longitude = data.length > 0 ? data[0].longitude : '';
    return extend(event, {latitude, longitude});
  });
}
