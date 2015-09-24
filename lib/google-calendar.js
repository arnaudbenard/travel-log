'use strict';

/**
 * Dependencies
 */

const promisify = require('pify');
const calendar = require('googleapis').calendar('v3');

const list = promisify(calendar.events.list);

/**
 * Environment variables for the google api
 */

const calendarId = process.env.CALENDAR_ID;
const auth = process.env.GOOGLE_API_KEY;

/**
 * Expose events function
 */

module.exports.events = events;

/**
 * Return the list of events
 */

function events () {
  return list({
    calendarId,
    auth,
    orderBy: 'startTime',
    singleEvents: true // We can only order by start time for single events
  })
  .then(data => data.items);
}
