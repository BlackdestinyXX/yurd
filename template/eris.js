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
    indexjs,
    env,
    indexts
}