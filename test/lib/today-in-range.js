'use strict';

/**
 * Dependencies
 */

const test = require('ava');
const todayInRange = require('../../lib/today-in-range');

/**
 * Tests
 */

test('Returns false if dates are undefined', (t) => {
  t.is(todayInRange(undefined, undefined), false);
  t.end();
});

test('Return true if in range', (t) => {
  const today = new Date();
  const past = today.setMonth(today.getMonth() - 1);
  const future = today.setMonth(today.getMonth() + 2);
  t.is(todayInRange(past, future), true);
  t.end();
});

