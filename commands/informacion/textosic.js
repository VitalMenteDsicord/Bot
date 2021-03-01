const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Texto IC - Procedimientos")
        .setDescription("/do Un celador llevaría al paciente hacia el BOX correspondiente. (Aquel donde acude el médico) \n \n /do Le realizarian toma de tensión, ")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoic" 
};