'use strict';

/**
 * Dependencies
 */

const humanDate = require('../lib/human-date');

/**
 * Expose CalendarEvent Class
 */

module.exports = CalendarEvent;

function CalendarEvent (event) {
  this.summary = event.summary;
  this.start = humanDate(event.start.date);
  this.end = humanDate(event.end.date);
  this.location = event.location;
  this.longitude = event.longitude;
  this.latitude = event.latitude;
}
