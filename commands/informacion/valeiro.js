const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Ayden McDowell")
        .setDescription("¿Quieres pertenecer a alguna de nuestras divisiones? Reacciona al emoticono correspondiente y te contactaremos desde asuntos internos.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "alex" 
};