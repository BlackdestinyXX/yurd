const indexjs = `const tmi = require("tmi.js");
const dotenv = require("dotenv");
dotenv.config();

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.NAME,
		password: process.env.OAUTH
	},
	channels: [\`\${process.env.CHANNEL}\`],
});

client.connect().catch(console.error);`

const indexts = `import tmi from "tmi.js"
import dotenv from "dotenv";
dotenv.config();

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.NAME,
		password: process.env.OAUTH
	},
	channels: [\`\${process.env.CHANNEL}\`],
});

client.connect().catch(console.error);`


const env = `NAME=
OAUTH=
CHANNEL=`

module.exports = {
    indexjs,
    env,
    indexts,
	code: [{fileName: 'index.js', fileCode: indexjs, typescriptCode: indexts}, {fileName: '.env', fileCode: env}],
    name: ['twitch-bot'],
    inizializeCommand: 'npm init -y',
    dependenciesCommand: 'npm install tmi.js dotenv',
    typescriptDependiencesCommand: 'npm install tmi.js dotenv',
    supportTypescript: true,
}