const funciones = require("./functions/functions.js");const errores = require("./error/error.js");
/* LIBRRIAS */
const Discord = require("discord.js"); const db = require('megadb'); const {readFileSync} = require("fs");

const TicketUser = new db.crearDB('iduser', 'tickets');

module.exports.run = async (bot, message) => {

    let datos = readFileSync('./config/config.json');
    let roles = JSON.parse(datos).Ticket.RepairTicket;

    let hasrole = await funciones.hasrole(message, roles);

    if(!hasrole){console.log("test");return null;}
    else {console.log("test")}



}



module.exports.help = {
    name: "rtick"
};