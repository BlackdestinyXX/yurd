const indexjs = `const Eris = require("eris");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Eris(process.env.TOKEN, {
    intents: [
        "guildMessages"
    ]
});

bot.on("ready", () => { 
    console.log("Ready!");
});

bot.on("error", (err) => {
  console.error(err);
});


// Code...

bot.connect();`

const indexts = `import Eris from 'eris';
import dotenv from "dotenv";

const bot = new Eris(process.env.TOKEN, {
    intents: [
        "guildMessages"
    ]
});

bot.on("ready", () => { 
    console.log("Ready!");
});

bot.on("error", (err) => {
  console.error(err);
});


// Code...

bot.connect();`

const env = `TOKEN=`

module.exports = {
    code: [{fileName: 'index.js', fileCode: indexjs, typescriptCode: indexts}, {fileName: '.env', fileCode: env}],
    name: ['discord-bot-eris'],
    inizializeCommand: 'npm init -y',
    dependenciesCommand: 'npm install eris dotenv',
    typescriptDependiencesCommand: 'npm install eris dotenv',
    supportTypescript: true,
}