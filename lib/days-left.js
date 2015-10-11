'use strict';

/**
 * Dependencies
 */

const moment = require('moment');

/**
 * Days left
 */

module.exports = (day) => {
  const today = moment();
  const diff = moment(day).diff(today, 'days');
  return diff > 1 ? `${diff} days left` : `One day left`;
};
