const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Cámaras de seguridad internas by Sharksecurity®")
        .setDescription("Servidor privado de cámaras de seguridad vídeovigiladas 24 horas.")
        .setImage('https://i.imgur.com/7vosodt.png')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "datapc" 
};