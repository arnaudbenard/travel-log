'use strict';

/**
 * Dependencies
 */

const tz = require('tz-lookup');
const moment = require('moment-timezone');

/**
 * Takes coordinates and returns the local time
 */

module.exports = localTime;

function localTime (lat, lon) {
  const timezone = tz(lat, lon);
  return moment().tz(timezone).format('h:mm a');
}
