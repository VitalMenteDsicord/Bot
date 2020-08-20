const funciones = require("./functions/functions.js"); const errores = require("./error/error.js");
/* LIBRRIAS */
const Discord = require("discord.js"); const db = require('megadb');
/*DATA */
const Dinero = new db.crearDB('dinero', 'Contabilidad');

module.exports.run = async (bot, message) => {
    let prefix = bot.prefix;
    let argumentos = message.content.split(",,");
    let DeclaradoAC = Dinero.tiene(`${message.guild.id}.declarado`) ? await Dinero.obtener(`${message.guild.id}.declarado`): 0;


}

module.exports.help = {
    name: "declarar", aliases:[]
}