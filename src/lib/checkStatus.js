'use strict'

const fetch = require('node-fetch');

class checkStatus {
	static async getStatusCode(url, timeout) {
		const options = {
			timeout: timeout
		};

		const res = await fetch(url, options)
		.catch(err => {
			return err;
		});

		return res.status;
	}

	// TODO: 2XXのように先頭番号のみを指定したときもマッチングできるようにする
	static async checkStatusCode(statusCode, expectedCode) {
		const asExpected = statusCode === expectedCode ? true : false;
		return asExpected;
	}
}

module.exports = checkStatus;
