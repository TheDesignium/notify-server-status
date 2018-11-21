'use strict'

const fetch = require('node-fetch');

class postToSlack {
	static async post(slackOptions, text) {
		const body = {
			channel: slackOptions.channel,
			username: slackOptions.username,
			text: text
		};

		const options = {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type':'application/json'
	    	}
	    };

		const res = await fetch(slackOptions.url, options)
		.catch(err => {
			console.log(err);
			throw new Error(err);
		});
		return 'success';
	}
}

module.exports = postToSlack;
