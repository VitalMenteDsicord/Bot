const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Normativa Interna | Los Santos Medical Assistance")
        .setDescription("https://docs.google.com/document/d/1sRtScXMiK1OpnAELGTh_-GWC1NvGuk5bYzV_6rrKZg4/edit?usp=sharing \n \n Todos los cambios en la normativa serán actualizados mediante este apartado.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "normativa" 
};