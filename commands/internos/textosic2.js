const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Texto IC - Llegada al hospital")
        .setDescription("/do Se vería como salen varios celadores del interior del hospital y trasladan al paciente hasta el interior de la sala de urgencias.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoic2" 
};