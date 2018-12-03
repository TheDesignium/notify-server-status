'use strict'

const checkStatus = require('./lib/checkStatus');
const postToSlack = require('./lib/postToSlack');

const notifyServerStatus = async options => {
	const statusCode = await checkStatus.getStatusCode(options.url, options.timeout)
	.catch(err => {
		throw new Error(err);
	});

	const text = await checkStatus.checkStatusCode(statusCode, options.expectedCode) ? options.ok_text : options.ng_text;

	const res = await postToSlack.post(options.slackOptions, text)
	.catch(err => {
		throw new Error(err);
	});

	return res;
}

module.exports = notifyServerStatus;
