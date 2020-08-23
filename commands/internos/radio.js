const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("RADIO TEMPORAL TS3")
        .setDescription("LSMA.teamspeak.de")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "radio" 
};