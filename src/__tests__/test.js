'use strict'

const checkStatus = require('../lib/checkStatus');
const postToSlack = require('../lib/postToSlack');

const correctSlackOptions = {
	url: 'your webhook url',
	channel: 'bot',
	username: 'serverStatusNotifier'
};
const wrongSlackOptions = {
	url: 'https://hooks.slack.com/services/wrongId',
	channel: 'bot',
	username: 'serverStatusNotifier'
};

describe('checkStatus', () => {
	describe('getStatusCode()', () => {
		it('checkStatus.getStatusCode("http://example.com") to be 200', async () => {
			expect(await checkStatus.getStatusCode('http://example.com')).toBe(200);
		});
		it('checkStatus.getStatusCode("http://badExample.com") not to be 200', async () => {
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
			expect(await postToSlack.post(correctSlackOptions, 'test')).toBe('success');
		});
		it('postToSlack(wrongSlackOptions, "test") to be error', async () => {
			expect(await postToSlack.post(wrongSlackOptions, 'test')).toBe('success');
		});
	});
});
