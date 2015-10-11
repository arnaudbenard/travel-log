'use strict';

/**
 * Dependencies
 */

const moment = require('moment');
const _ = require('lodash');
const todayInRange = require('./today-in-range');

/**
 * Returns an object with all the events, today's event
 * and the future ones
 */

module.exports = (events) => {
  const isToday = event => todayInRange(event.start.date, event.end.date);
  const currentEvent = _.find(events, isToday) || {};

  const today = moment();
  const isFuture = event => moment(event.start.date).diff(today) > 0;
  const futureEvents = _.filter(events, isFuture);

  return {events, currentEvent, futureEvents};
};

