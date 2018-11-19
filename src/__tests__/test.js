'use strict'

const notifyServerStatus = require('../index');

test('notifyServerStatus(options)', async () => {
  const options = {
    url: 'http://example.com'
  };
  expect(await notifyServerStatus(options)).toBe(200);
});
