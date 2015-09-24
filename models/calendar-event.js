'use strict';

/**
 * Dependencies
 */

const humanDate = require('../lib/human-date');
const todayInRange = require('../lib/today-in-range');

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
  this.isCurrent = todayInRange(event.start.date, event.end.date);
}
