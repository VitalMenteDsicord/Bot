const Discord = require("discord.js");const db = require('megadb');
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const Dinero = new db.crearDB('dinero', 'Contabilidad'); 

module.exports.run = async (bot, message) => {
    let prefix = bot.prefix;

    let DeclaradoAC = Dinero.tiene(`${message.guild.id}.declarado`) ? await Dinero.obtener(`${message.guild.id}.declarado`): 0;
    let TrasferidoAC = Dinero.tiene(`${message.guild.id}.transferido`) ? await Dinero.obtener(`${message.guild.id}.transferido`): 0;

    let fecha = new Date();
    let mes = meses[fecha.getMonth()];

    let embed = new Discord.MessageEmbed()
        .setColor(0xd80b0b)
        .setTitle("Ganancias de "+mes)
        .addField("Sin trasferir a cupula","$ "+DeclaradoAC)
        .addField("Transferidas a cupula","$ "+TrasferidoAC)
    message.channel.send({embed}).catch();


};


module.exports.help = {
    name: "dinero"
};