'use strict'

const fetch = require('node-fetch');

class checkStatus {
  // TODO: 指定されたurlへリクエストを送るメソッド
  static async getStatusCode(url) {
    const res = await fetch(url)
    .catch(err => {
      return err;
    });

    return res.status;
  }

  // TODO: ステータスコードを確認するメソッド
  static async checkStatusCode(statusCode, expectedCode) {
    const asExpected = statusCode === expectedCode ? true : false;
    return asExpected;
  }
}

module.exports = checkStatus;
