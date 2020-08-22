const funciones = require("./functions/functions.js");const errores = require("./error/error.js");
/* LIBRRIAS */
const Discord = require("discord.js"); const db = require('megadb'); const {readFileSync} = require("fs");

const userdata = new db.crearDB('iduser', 'tickets');
const channeldata = new db.crearDB('idcanal', 'tickets');

module.exports.run = async (bot, message) => {

    let datos = readFileSync('./config/config.json');
    let roles = JSON.parse(datos).Ticket.RepairTicket;

    let hasrole = await funciones.hasrole(message, roles);

    if(!hasrole){let tipo = 5;errores.run(bot, message, tipo);return null;}
    if(message.mentions.users.size < 1){let tipo = 6;errores.run(bot, message, tipo);return null};


    let server = message.guild.id;
    let user = message.mentions.users.first();






}



module.exports.help = {
    name: "rtick"
};