const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Seguro Médico Extrahospitalario")
        .setDescription("Contrata ya nuestro Seguro Médico Extrahospitalario. \n Precio especial para Empresas si lo solicitas antes del **25/09**. \n \n ¿No quieres contratar nuestro seguro pero nos necesitas para algún evento, o traslado? No te preocupes, solicita un servicio en concreto a través del <#737592002358673420>")
        .setImage('https://i.imgur.com/1iqZftp.png?1')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "seguro" 
};