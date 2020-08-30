const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Guia médica avanzada")
        .setDescription("En esta guia encontraremos los procedimientos para casi todas las situaciones posibles a encontrarnos atendiendo avisos de emergencia, solo se incluirá el tipo de heridas"
")
        .setColor(0xC2E512) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "heridas" 
};