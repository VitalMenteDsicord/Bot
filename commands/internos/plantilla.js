const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Contrato laboral")
        .setDescription("Contrato ")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoic2" 
};