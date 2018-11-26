'use strict'

const fetchMock = require('fetch-mock');
const fetch = require('node-fetch');
const myMock = fetchMock.sandbox().mock('*',{hello: 'world'});
const nodeFetch = myMock

// const nodeFetch = jest.genMockFromModule('node-fetch');

module.exports = nodeFetch
