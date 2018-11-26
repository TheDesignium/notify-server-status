'use strict'

const checkStatus = require('../lib/checkStatus');
const postToSlack = require('../lib/postToSlack');
const fetchMock = require('fetch-mock');
const proxyquire = require('proxyquire');
const makeRequest = require('../mock/makeRequest');

const correctURL = 'https://hooks.slack.com/services/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';
const wrongURL = 'https://hooks.slack.com/services/wrongId';

const baseOptions = {
	url: '',
	channel: 'bot',
	username: 'serverStatusNotifier'
};

// jest.mock('node-fetch')

describe('fetch-mock test', () => {
	it('check fetch mock test', async () => {
		/*
		const myMock = fetchMock.sandbox().mock('*', 200, {
			res: 'success'
		});

		const makeRequest = proxyquire('../mock/makeRequest', {
		  'node-fetch': myMock
		});

		var myMock = fetchMock.sandbox().mock('*',{hello: 'world'});
		var makeRequest = proxyquire('../mock/makeRequest',{
		  'node-fetch': 'hello',
		  '@runtimeGlobal': true
		});

		makeRequest().then(function(data) {
		  console.log('got data', data);
		}).catch((e) => { console.log(e.message)});

		const res = await makeRequest();
		console.log(res);
		console.log(res.status);
		*/
		makeRequest().then(function(data) {
  			console.log('got data', data);
		}).catch((e) => { console.log(e.message)});

		// makeRequest().then(res => {
		// 	console.log(res);
		// })
	});
});

/*
describe('makeRequest', () => {
	it('check makeRequest', async () => {
		await makeRequest();
	});
});
*/

// describe('checkStatus', () => {
// 	describe('getStatusCode()', () => {
// 		it('checkStatus.getStatusCode("http://example.com") to be 200', async () => {
// 			expect(await checkStatus.getStatusCode('http://example.com')).toBe(200);
// 		});
// 		it('checkStatus.getStatusCode("http://badExample.com") not to be 200', async () => {
// 			expect(await checkStatus.getStatusCode('http://badExmaple.com')).not.toBe(200);
// 		});
// 	});
// 	describe('checkStatusCode()', () => {
// 		it('checkStatusCode(200, 200) to be true', async () => {
// 			expect(await checkStatus.checkStatusCode(200, 200)).toBeTruthy();
// 		});
// 		it('checkStatusCode(200, 400) to be false', async () => {
// 			expect(await checkStatus.checkStatusCode(200, 400)).toBeFalsy();
// 		});
// 		// TODO: 2XXのような表記のときのテスト
// 	});
// });
//
// describe('postToSlack', () => {
// 	describe('post', () => {
// 		it('postToSlack(correctSlackOptions, "test") to be success', async () => {
// 			const options = baseOptions;
// 			options.url = correctURL;
// 			expect(await postToSlack.post(options, 'test')).toBe('success');
// 		});
// 		it('postToSlack(wrongSlackOptions, "test") to be error', async () => {
// 			const options = baseOptions;
// 			options.url = wrongURL;
// 			expect(await postToSlack.post(options, 'test')).toBe('success');
// 		});
// 	});
// });
