#!/usr/bin/env node
const program = require('commander');
const F = require('./src/future');

program
	.version(F.version());

program
	.command('login <username> <password>')
	.description('Login')
	.action((username, password) => {
		F.login(username, password);
	});

program
	.command('info')
	.description('Show account info')
	.action(() => {
		F.info();
	});

program
	.arguments('<status> [more...]')
	.description('')
	.action((pre, more) => {
		more.unshift(pre);
		const text = more.join(' ');
		F.update(text);
	});

program.parse(process.argv);

if (program.args.length === 0) {
	program.help();
}
