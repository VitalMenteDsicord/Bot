const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Guia médica avanzada")
        .setDescription("a")
        .setColor(0xC2E512) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "heridas" 
};