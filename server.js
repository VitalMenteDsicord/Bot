//SCRIPT DE ARRANQUE

const http = require('http');const express = require('express');const app = express();
let cooldown= new Set();

app.use(express.static("public"));app.listen(process.env.PORT);


setInterval(() => {http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);}, 280000);


app.get("/", (request, response) => {
    response.sendFile(__dirname + '/html/index.html');
});

app.get("/servicios", (request, response) => {
    response.sendFile(__dirname + '/html/servicios.html');
});

app.get("/contacto", (request, response) => {
    response.sendFile(__dirname + '/html/contacto.html');
});

// DESDE AQUI EL CODIGO EL BOT

/* Libreria */
const Discord = require("discord.js"); const fs = require('fs'); const db = require('megadb');
/* BOT */
const bot = new Discord.Client();
const prefix = process.env.prefix;


bot.on('ready', () => {console.log("》 🟢 ENCENDIDO CORRECTAMENTE 🟢 《");});




//bot.login(process.env.token);