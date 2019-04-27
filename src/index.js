'use strict'

const checkStatus = require('./lib/checkStatus');
const postToSlack = require('./lib/postToSlack');

const notifyServerStatus = async requestOptions => {
	if(requestOptions.url === undefined) {
		throw new Error('url does not exist');
	}
	const options = {
		url: requestOptions.url,
		expectedCode: requestOptions.expectedCode !== undefined ? requestOptions.expectedCode : 200,
		timeout: requestOptions.timeout !== undefined ? requestOptions.timeout : 300,
		ok_text: requestOptions.ok_text,
		ng_text: requestOptions.ng_text !== undefined ? requestOptions.ng_text : 'server is sick',
		slackOptions: requestOptions.slackOptions
	};

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

const checkByPostReqq = async requestOptions => {
	if(requestOptions.url === undefined) {
		throw new Error('url does not exist');
	}
	if(requestOptions.body === undefined) {
		throw new Error('request body does not exist');
	}
	const options = {
		url: requestOptions.url,
		body: requestOptions.body,
		expectedCode: requestOptions.expectedCode !== undefined ? requestOptions.expectedCode : 200,
		timeout: requestOptions.timeout !== undefined ? requestOptions.timeout : 300,
		ok_text: requestOptions.ok_text,
		ng_text: requestOptions.ng_text !== undefined ? requestOptions.ng_text : 'server is sick',
		slackOptions: requestOptions.slackOptions
	};

	const statusCode = await checkStatus.postRequest(options.url, options.body, options.timeout)
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
