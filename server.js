//SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();
let cooldown= new Set();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


// DESDE AQUI EL CODIGO EL BOT

/* Libreria */
const Discord = require("discord.js"); const fs = require('fs'); const db = require('megadb');
/* BOT */
const bot = new Discord.Client();
const prefix = process.env.prefix;


bot.on('ready', () => {
    console.log("》 🟢 ENCENDIDO CORRECTAMENTE 🟢 《");
});


bot.on('channelDelete', (channel) => {
  let log = require("./PLogs/Canales/borrados.js")  
  log.run(bot, channel);
});

bot.on('messageDelete', (message) => {
  let log = require("./PLogs/Mensajes/borrados.js")  
  log.run(bot, message);
});



bot.login(process.env.token);