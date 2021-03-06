'use strict';

/**
 * Dependencies
 */

const moment = require('moment');
require('moment-range');

/**
 * Checks if today is in date range
 */

module.exports = (start, end) => {
  if (!start || !end) return false;
  const range = moment.range(moment(start), moment(end));
  const today = moment();
  return range.contains(today);
};
