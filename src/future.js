const Future = require('future-diary-sdk');
const Conf = require('conf');

const config = new Conf();
const user = config.get('user') || {};
const {username = '', password = ''} = user;

const f = new Future({username, password});

class F {
	static login(username, password) {
		config.set('user', {username, password});
	}

	static info() {
		console.log(user);
	}

	static async update(text) {
		return f.post('/statuses/update', {status: text, source: 'Future'});
	}
}

module.exports = F;
