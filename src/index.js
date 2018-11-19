'use strict'

const checkStatus = require('./lib/checkStatus');

const notifyServerStatus = async options => {
  console.log('start service');
  const res = await checkStatus.getStatusCode(options.url)

  return res;
  // TODO: 指定されたURLにリクエストを送りステータスコードを確認


  // TODO: ステータスコードをもとにスラックへメッセージをポスト
}

module.exports = notifyServerStatus;
