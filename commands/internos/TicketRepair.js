const Discord = require("discord.js"); const db = require('megadb');

const TicketUser = new db.crearDB('iduser', 'tickets');

module.exports.run = async (bot, message) => {

    let administrador = message.member.hasPermission('ADMINISTRATOR');

}



module.exports.help = {
    name: "rtick"
};