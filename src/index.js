'use strict'

const checkStatus = require('./lib/checkStatus');
const postToSlack = require('./lib/postToSlack');

const notifyServerStatus = async options => {
	console.log('start service');

	// TODO: 指定されたURLにリクエストを送りステータスコードを確認
	const statusCode = await checkStatus.getStatusCode(options.url)
	.catch(err => {
		throw new Error(err);
	});

	// TODO: ステータスコードをもとにslackへポストするメッセージを決定
	const text = await checkStatus.checkStatusCode(statusCode, options.expectedCode) ? options.ok_text : options.ng_text;

	// TODO: slackへポスト
	const res = await postToSlack.post(options.slackOptions, text)
	.catch(err => {
		throw new Error(err);
	});

	return res;
}

module.exports = notifyServerStatus;
