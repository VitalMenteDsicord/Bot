const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("¿Crees que podemos mejorar algo?")
        .setDescription("Escribe tu idea en este canal, y nosotros lo haremos realidad.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "sugerencia" 
};