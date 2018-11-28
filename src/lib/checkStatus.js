'use strict'

const fetch = require('node-fetch');

class checkStatus {
	// TODO: 指定されたurlへリクエストを送るメソッド fin?
	static async getStatusCode(url) {
		const res = await fetch(url)
		.catch(err => {
			return err;
		});

		return res.status;
	}

	// TODO: ステータスコードを確認するメソッド
	// TODO: 2XXのように先頭番号のみを指定したときもマッチングできるようにする
	static async checkStatusCode(statusCode, expectedCode) {
		const asExpected = statusCode === expectedCode ? true : false;
		return asExpected;
	}
}

module.exports = checkStatus;
