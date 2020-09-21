const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Normativa Interna | Unidades Especiales")
        .setDescription("Se añade a partir del día 21/09 de 2020, el punto de Unidades Especiales, que trata sobre el uso del VIR y CORONER.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "ac1" 
};