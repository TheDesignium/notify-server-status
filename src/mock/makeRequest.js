/*
'use strict'

var fetch = require('node-fetch');
console.log(fetch);

const makeRequest = async () => {
	const res = await fetch("http://httpbin.org/get");
	const resJson = await res.json();
	return resJson;
};

module.exports = makeRequest;
*/

const makeRequest = async () => {
	const test = 'a';
	return test;
};
