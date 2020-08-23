const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Hospitales Públicos Los Santos")
        .setDescription("Instalaciones de Hospitales Públicos de Los Santos: https://docs.google.com/document/d/1sXd1Q1W_wXRNt84IwPOJKKoYpwez8q5VQEy6l_uZeyQ/edit?usp=sharing")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "hospitales" 
};