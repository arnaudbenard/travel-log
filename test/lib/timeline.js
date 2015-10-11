'use strict';

/**
 * Dependencies
 */

const test = require('ava');
const timeline = require('../../lib/timeline');

/**
 * Tests
 */

test('Return the events', (t) => {
  const events = [
  {
    summary: 'Lausanne',
    start: {},
    end: {},
  }, {
    summary: 'Paris',
    start: {},
    end: {},
  }];

  const response = timeline(events);
  t.is(response.events, events);
  t.end();
});

test('Return the current event', (t) => {
  const today = new Date();
  const validEvent = {
    summary: 'Lausanne',
    start: {
      date: today.setMonth(today.getMonth() - 1)
    },
    end: {
      date: today.setMonth(today.getMonth() + 2)
    },
  };

  const response = timeline([validEvent]);
  t.is(response.currentEvent, validEvent);
  t.end();
});

test('Return the future events', (t) => {
  const today = new Date();
  const future = {
    summary: 'Lausanne',
    start: {
      date: today.setMonth(today.getMonth() + 4)
    },
    end: {
      date: today.setMonth(today.getMonth() + 5)
    },
  };

  const response = timeline([future]);
  t.is(response.futureEvents.length, 1);
  t.is(response.futureEvents[0], future);
  t.end();
});
