# できること

1. 外部サーバの死活監視
1.1. ステータスコード
1.2. レスポンスタイム
2. Slackへの通知

# 引数サンプル

| 引数名 | 説明 |
|-----|-----|
| url | チェック対象のURL |
| expected_code | 期待されるステータスコード e.g. 200 301 500 2xx |
| timeout | タイムアウトまでの秒数(ms) |
| ok_text | 成功したときのSlackに投げるテキスト。何もなし可。 e.g. ""|
| ng_text | 失敗したときのSlackの通知するテキスト e.g. "@channel コード$code サーバが落ちています" |

```
https://example.com/notify-server-status?url=http://example.com&expected_code=200&ng_text=failed

https://example.com/notify-server-status?url=http://example.com&expected_code=200&ok_text=success
```

# モック
https://qiita.com/kenshiroh/items/5ee5248ddafea0ae5572


# 参考パッケージ
https://www.npmjs.com/search?q=notify-server-status

https://www.npmjs.com/package/@m03geek/server-status

https://www.npmjs.com/package/connect-server-status

https://www.npmjs.com/package/status-monitor

https://www.npmjs.com/package/server-health

https://www.npmjs.com/package/hubot-site-health-examine

Node.jsの公開について https://2017.l2tp.org/archives/107
