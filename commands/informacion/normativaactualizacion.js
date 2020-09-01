const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Normativa Interna | Uso de comandos ")
        .setDescription("Se añade a partir del día 01/09 de 2020, el punto de Uso de comandos. \n \n Se incluye normativa de los comandos: /d /deservicio /f y /r \n\n ((Normativa OOC))")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "ac1" 
};