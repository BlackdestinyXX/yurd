#!/usr/bin/env node


/*
# Yurd app
# Template Generator
# 
# 
# README
# Whenever you have to create a project in any language, you often waste time creating the code base. 
# Yurd has some code base templates to install to get started and programming right away without wasting time creating the code base 
# (installs with npm but also uses other languages)
# 
# npm i -g yurd
# 
# All templates
# 
# discord-bot, discord-bot-eris, simply-site, twitch-bot, website, djs-handler, go-multiplication-table, discordpy, cppcli, tkinter, swing-template, discordia, go, discordext, rust-cli
# 
# yurd create <template>
# 
# Use TypeScript in discord-bot | discord-bot-eris | twitch-bot | djs-handler
# 
# yurd create <template> -ts 
# 
# Open VSC
# 
# yurd create <template> -vsc 
# 
# Info command
# 
# yurd info <template>
# 
# General commands
# 
# yurd help
# yurd developer
# yurd version
# yurd all
# 
# ----------------------------------------------------------------
# 
# Yurd by
# Thebigbot - Main developer & CEO - https://github.com/Thebigbot0000
# ale_006 - Template developer - https://github.com/ale-006
# NotReallyEight - Template developer - https://github.com/NotReallyEight
# UsboKirishima - Template developer - https://github.com/UsboKirishima
# Bl4ckdestinyXX - Template developer - https://github.com/BlackdestinyXX
# 
# ----------------------------------------------------------------
# 
# All Commands
# yurd help
# yurd developer
# yurd version
# yurd all
# yurd info <template>
# yurd create <template>
# 
# 
# yurd help : Show help menu
# yurd version : Show version
# yurd create <template> : Create template
# yurd all : Show all template
# yurd info <template> : Show template info
# yurd developer : Show all developer
# 
# 
# 
# ----------------------------------------------------------------
# 
# 
# 
# Links
# https://github.com/Thebigbot0000/yurd
# https://github.com/Thebigbot0000/yurd.js.org
# https://www.npmjs.com/package/yurd
# 
# 
# 
# § Dev §
# https://github.com/Thebigbot0000
# https://github.com/ale-006
# https://github.com/NotReallyEight
# https://github.com/UsboKirishima
# https://github.com/BlackdestinyXX
# https://www.npmjs.com/~thebigbot
# 
# 
# It is strictly forbidden to copy any main code 
# and pass it off as your own 
# 
# 
*/


const clc = require("cli-color");
const { Command } = require('commander');
const program = new Command();
const inquirer = require('inquirer');

// Import package.json
const pkJson = require('./package.json')

// Import Handler Functions
const handler = require("./handler")


// Add template
program
  .command('create [template]')
  .option('-vsc, --code', 'Open Visual Studio Code Before Process')
  .option('-ts, --typescript', 'Install js template with lang ts')
  .description('Install Template')
  .action((template, options) => {

      if (!template) {
        console.log(clc.red(`404 Error. Not Found! -- Yurd ${pkJson.version}`))
      } else {
        handler.generateTemplate(template)
      }

  });


// version 
program
  .command('version')
  .description('YURD Version')
  .action(() => {
    console.log(pkJson.version)
  })

program
  .command('all')
  .description('YURD all template')
  .action(() => {
    console.log(
      clc.white(`
        JavaScript Support: 
        discord-bot | discord-bot-eris | simply-site | twitch-bot | website | djs-handler | webgl`),
      clc.white(`

      TypeScript Support:
      discord-bot | discord-bot-eris | twitch-bot | djs-handler`),
      clc.white(`

    C++ Support:
    cpp-cli`),

      clc.white(`

    Go Support:
    go-multiplication-table | go`),

      clc.white(`

    Python Support:
    discordpy | tkinter | discordext`),

      clc.white(`

    Java Support:
    swing-template`),

      clc.white(`

    Lua Support:
    discordia`),

      clc.white(`

    Rust Support:
    rust-cli`))
  })


program
  .command('info [template]')
  .description('YURD Help')
  .action((template) => {
    if (template === 'discord-bot') {
      console.log(`
》File: index.js, package-lock.json, package.json
》Directory: node_modules
》Language: Js
》Packages: discord.js, dotenv
》Requires: Node.js, npm`)
    }

    if (template === 'discord-bot-eris') {
      console.log(`
》File: index.js, package-lock.json, package.json
》Directory: node_modules
》Language: Js
》Packages: eris, dotenv
》Requires: Node.js, npm`)
    }

    if (template === 'website') {
      console.log(`
》File: index.js, package-lock.json, package.json, index.html, index.css
》Directory: node_modules
》Language: html, css, js
》Packages: express, fs, http
》Requires: Node.js, npm`)
    }

    if (template === 'simply-site') {
      console.log(`
》File: index.html, style.css, script.js
》Language: Html, Css, Js`)
    }

    if (template === 'twitch-bot') {
      console.log(`
》File: index.js, package-lock.json, package.json
》Directory: node_modules
》Language: Js
》Packages: tmi.js, dotenv
》Requires: Node.js, npm`)
    }

    if (template === 'djs-handler') {
      console.log(`
》File: index.js, package-lock.json, package.json
》Directory: node_modules, commands
》Language: Js
》Packages: discord.js, dotenv, fs
》Requires: Node.js, npm`)
    }

    if (template === 'go-multiplication-table') {
      console.log(`
》File: main.go
》Language: Go
》Packages: fmt
》Requires: Go`)
    }

    if (template === 'discordpy') {
      console.log(`
》File: main.py
》Language: Python
》Packages: discord.py
》Requires: Python, pip`)
    }

    if (template === 'cppcli') {
      console.log(`
》File: info.h, main.cpp
》Language: C++`)
    }

    if (template === 'tkinter') {
      console.log(`
》File: main.py
》Language: Python
》Packages: tkinter
》Requires: Python, pip`)
    }

    if (template === 'swing-template') {
      console.log(`
》File: main.java
》Language: Java
》Packages: JavaSwing
》Requires: Java`)
    }

    if (template === 'discordia') {
      console.log(`
》File: main.lua
》Language: Lua
》Packages: SinisterRectus/discordia
》Requires: Luvit`)
    }

    if (template === 'go') {
      console.log(`
》File: main.go
》Language: Go
》Packages: fmt
》Requires: Go`)
    }

    if (template === 'discordext') {
      console.log(`
》File: main.py
》Language: Python
》Packages: discord.py
》Requires: Python, pip`)
    }

    if (template === 'rust-cli') {
      console.log(`
》File: main.rs
》Language: Rust
》Requires: Rust`)
    }
  })


program
  .command('help')
  .description('YURD Help')
  .action(() => {
    console.log(clc.white(`
yurd help : Show help menu
yurd version : Show version
yurd create <template> : Create template
yurd all : Show all template
yurd info <template> : Show template info
yurd developer : Show all developer`))
  })

program
  .command('developer')
  .description('YURD Developer')
  .action(() => {
    console.log(clc.white(`
Thebigbot - Main developer & CEO - https://github.com/Thebigbot0000
ale_006 - Template developer - https://github.com/ale-006
NotReallyEight - Template developer - https://github.com/NotReallyEight
UsboKirishima - Template developer - https://github.com/UsboKirishima
Bl4ckdestinyXX - Template developer - https://github.com/BlackdestinyXX`))
  })

program
  .command('dev')
  .description('YURD Developer')
  .action(() => {
    console.log(clc.white(`
Thebigbot - Main developer & CEO - https://github.com/Thebigbot0000
ale_006 - Template developer - https://github.com/ale-006
NotReallyEight - Template developer - https://github.com/NotReallyEight
UsboKirishima - Template developer - https://github.com/UsboKirishima
Bl4ckdestinyXX - Template developer - https://github.com/BlackdestinyXX`))
  })




program.parse();


