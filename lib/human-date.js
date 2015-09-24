'use strict';

/**
 * Dependencies
 */

const moment = require('moment');

/**
 * Formats date to 'September 25th'
 */

module.exports = date => moment(date).format('MMMM Do');
