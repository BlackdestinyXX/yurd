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
    indexts
}