'use strict'

var fetch = require('node-fetch');

const makeRequest = async () => {
	console.log("1");
	fetch("http://httpbin.org/get")
	console.log("2");
	const res = await fetch("http://httpbin.org/get");
	console.log("3");
	const resJson = await res.json();
	console.log(resJson);
	return resJson;
};

module.exports = makeRequest;
