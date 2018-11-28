'use strict'

const notifyServerStatus = require('../src/index');

const correctSlackOptions = {
	url: 'https://hooks.slack.com/services/' + process.env.webhookID,
	channel: 'bot',
	username: 'serverStatusNotifier'
};
const options = {
	url: 'http://example.com',
	expectedCode: 200,
	ok_text: 'server is running',
	ng_text: 'server is sick',
	slackOptions: correctSlackOptions
};

describe('unit test', () => {
	describe('notifyServerStatus', () => {
		it('notifyServerStatus to be success', async () => {
			expect(await notifyServerStatus(options)).toBe('success');
		});
	});
});
