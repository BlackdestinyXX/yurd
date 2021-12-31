const indexjs = `const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const env = require('dotenv').config()

client.on('ready', () => {
    console.log(\`\${client.user.username}#\${client.user.discriminator} Online!\`)
})

client.login(process.env.TOKEN)`

const indexts = `import Discord from 'discord.js';
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]})
import dotenv from "dotenv";

client.on('ready', () => {
    console.log(\`\${client.user.username}#\${client.user.discriminator} Online!\`)
})

client.login(process.env.TOKEN)`

const env = `TOKEN=`

module.exports = {
    code: [{fileName: 'index.js', fileCode: indexjs, typescriptCode: indexts}, {fileName: '.env', fileCode: env}],
    name: ['template name', 'template name2'],
    inizializeCommand: 'npm init -y',
    dependenciesCommand: 'npm install discord.js dotenv',
    supportTypescript: true,
}