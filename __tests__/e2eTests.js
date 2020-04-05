'use strict'

const notifyServerStatus = require('../src/index');

const correctSlackOptions = {
	url: 'https://hooks.slack.com/services/' + process.env.webhookID,
	channel: 'bot',
	username: 'serverStatusNotifier'
};
const requestBody = {
	test: "test"
};
const getOptions = {
	url: 'http://example.com',
	expectedCode: 200,
	timeout: 1000,
	ok_text: 'server is running',
	ng_text: 'server is sick',
	slackOptions: correctSlackOptions
};
const postOptions = {
	url: 'http://example.com',
	body: requestBody,
	expectedCode: 200,
	timeout: 1000,
	ok_text: 'server is running',
	ng_text: 'server is sick',
	slackOptions: correctSlackOptions
};


describe('e2e test', () => {
	describe('notifyServerStatus', () => {
		it('checkByGetReq to be success', async () => {
			expect(await notifyServerStatus.checkByGetReq(getOptions)).toBe('success');
		});
		it('checkByPostReq to be success', async () => {
			expect(await notifyServerStatus.checkByPostReq(postOptions)).toBe('success');
		});
	});
});
