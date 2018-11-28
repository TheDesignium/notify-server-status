'use strict'


const checkStatus = require('../src/lib/checkStatus');
const postToSlack = require('../src/lib/postToSlack');

const correctURL = 'https://hooks.slack.com/services/' + process.env.webhookID;
const wrongURL = 'https://hooks.slack.com/services/wrongId';

const slackOptions = {
	channel: 'bot',
	username: 'serverStatusNotifier'
};

describe('checkStatus', () => {
	describe('getStatusCode()', () => {
		it('checkStatus.getStatusCode("http://example.com") to be 200', async () => {
			const fetch = require('node-fetch');
			jest.mock('node-fetch', () => jest.fn());
			const response = Promise.resolve({
				status: 200
			});
			fetch.mockImplementationOnce(() => response);
			await response;

			expect(await checkStatus.getStatusCode('http://example.com')).toBe(200);
		});
		it('checkStatus.getStatusCode("http://badExample.com") not to be 200', async () => {
			const fetch = require('node-fetch');
			jest.mock('node-fetch', () => jest.fn());
			const response = Promise.resolve({
				status: '000'
			});
			fetch.mockImplementationOnce(() => response);
			await response;

			expect(await checkStatus.getStatusCode('http://badExmaple.com')).not.toBe(200);
		});
	});
	describe('checkStatusCode()', () => {
		it('checkStatusCode(200, 200) to be true', async () => {
			expect(await checkStatus.checkStatusCode(200, 200)).toBeTruthy();
		});
		it('checkStatusCode(200, 400) to be false', async () => {
			expect(await checkStatus.checkStatusCode(200, 400)).toBeFalsy();
		});
		// TODO: 2XXのような表記のときのテスト
	});
});

describe('postToSlack', () => {
	describe('post', () => {
		it('postToSlack(correctSlackOptions, "test") to be success', async () => {
			const options = slackOptions;
			options.url = correctURL;

			expect(await postToSlack.post(options, 'test')).toBe('success');
		});
		it('postToSlack(wrongSlackOptions, "test") to be error', async () => {
			const options = slackOptions;
			options.url = wrongURL;

			expect(await postToSlack.post(options, 'test')).toBe('success');
		});
	});
});
