'use strict';

/**
 * Dependencies
 */

const humanDate = require('../lib/human-date');
const localTime = require('../lib/local-time');
const daysLeft = require('../lib/days-left');

/**
 * Expose CalendarEvent Class
 */

module.exports = CalendarEvent;

function CalendarEvent (event) {
  this.summary = event.summary;
  this.start = event.start;
  this.end = event.end;
  this.startDate = humanDate(event.start.date);
  this.endDate = humanDate(event.end.date);
  this.location = event.location;
  this.longitude = event.longitude;
  this.latitude = event.latitude;
  this.localTime = localTime(event.latitude, event.longitude);
  this.daysLeft = daysLeft(event.end.date);
}
