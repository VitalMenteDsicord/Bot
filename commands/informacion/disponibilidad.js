const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Horario de atención (28/09)")
        .setDescription("Director LSMA® Jhon Wood. \n Horario disponible: **23:00** a **00:00** (Hora peninsular española) \n \n ")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "paco"
};