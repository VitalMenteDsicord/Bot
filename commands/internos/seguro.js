const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Seguro Médico Extrahospitalario")
        .setDescription("Contrata ya nuestro Seguro Médico Extrahospitalario, \n ¿No quieres contratar nuestro seguro pero nos necesitas para algún evento, o traslado? No te preocupes, solicita un servicio en concreto a través de:  \n \n <#737592002358673420>)
        .setURL("https://forms.gle/pPsaLT1bpup59wm2A")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "unetetexto" 
};