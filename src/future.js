const Future = require('future-diary-sdk');
const chalk = require('chalk');
const Conf = require('conf');
const sdkPkg = require('future-diary-sdk/package');
const cliPkg = require('../package');

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

	static version() {
		const cliVersion = chalk.cyanBright(`future-diary-cli: ${cliPkg.version}`);
		const sdkVersion = chalk.green(`future-diary-sdk: ${sdkPkg.version}`);
		const version = `${cliVersion}\n${sdkVersion}`;
		return version;
	}
}

module.exports = F;
