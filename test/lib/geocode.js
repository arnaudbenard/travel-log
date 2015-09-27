'use strict';

/**
 * Dependencies
 */

const test = require('ava');
const geocode = require('../../lib/geocode');
const cache = require('../../lib/cache');

/**
 * Before hook data for the test
 */

let result;
const city = 'London';

/**
 * Before hook
 */

test.before('Query data', function * (t) {
  result = yield geocode(city);
  t.end();
});

/**
 * Tests
 */

test('Save the query in the cache', function (t) {
  const cached = cache.get(city);
  t.is(cached, result);
  t.end();
});

test('Fetch data from the cache if it exists', function * (t) {
  let data = cache.get(city);
  data.isCache = true;
  const secondQuery = yield geocode(city);
  t.ok(secondQuery.isCache);
  t.end();
});
