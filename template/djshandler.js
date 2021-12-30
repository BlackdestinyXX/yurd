const indexjs = `const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const env = require('dotenv').config()
const fs = require('fs')

client.on('ready', () => {
    console.log(\`\${client.user.username}#\${client.user.discriminator} Online!\`)
})

// Create Handler
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(\`./commands/\${file}\`);
 
    client.commands.set(command.name, command);
}

// Commands

client.on('messageCreate', message =>{
    if(!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
 
    const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    /* To add a command add this here  
    if(command === 'command_name'){
           client.commands.get('command_name').execute(message, args);
       } 
    */
});

client.login(process.env.TOKEN)`

const indexts = `import Discord from 'discord.js';
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]})
import dotenv from "dotenv";
import fs from "fs";

client.on('ready', () => {
    console.log(\`\${client.user.username}#\${client.user.discriminator} Online!\`)
})

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(\`./commands/\${file}\`);
 
    client.commands.set(command.name, command);
}

// Commands

client.on('messageCreate', message =>{
    if(!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
 
    const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    /* To add a command add this here  
    if(command === 'command_name'){
           client.commands.get('command_name').execute(message, args);
       } 
    */
});

client.login(process.env.TOKEN)`

const env = `TOKEN=
PREFIX=`

module.exports = {
    indexjs,
    env,
    indexts
}