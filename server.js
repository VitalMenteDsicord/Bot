/* LIBRERIAS */
const Discord = require('discord.js');const http = require('http');const express = require('express'); let { readdirSync } = require('fs');
/* BOT AND DATA */
const bot = new Discord.Client();
bot.comandosIN = new Discord.Collection();
bot.prefix = ";";
/* WEB DATA & OTROS */ 
const app = express();
let cooldown= new Set();

// WEB Y  SCRIPT DE ARRANQUE

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



// DISCORD BOT DATA //

/* COMANDOS DEL BOT */
console.log("[COMANDOS INTERNOS]");
for(const file of readdirSync('./commands/internos/')) { 
    if(file.endsWith(".js")){
        let archivo = require(`./commands/internos/${file}`); 
        let aliases;
        try {aliases = archivo.help.aliases.length;} catch(err){};
        if(aliases > 0 && aliases !== undefined) {
            for(let i = 0; i < aliases; i++){bot.comandosIN.set(archivo.help.aliases[i], archivo)};
            bot.comandosIN.set(archivo.help.name, archivo);console.log(`${archivo.help.name}.js cargado con ${aliases} alias`);
        } else {console.log(`${archivo.help.name}.js cargado`);bot.comandosIN.set(archivo.help.name, archivo)};
    };
};
/* EVENTOS DEL BOT */
console.log("[CARGA DE EVENTOS]");
for(const file of readdirSync('./event/')) { 
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3); 
        let fileContents = require(`./event/${file}`); 

        console.log(file);

        bot.on(fileName, fileContents.bind(null, bot));
        delete require.cache[require.resolve(`./event/${file}`)];  
    };
};



//bot.login(process.env.token)