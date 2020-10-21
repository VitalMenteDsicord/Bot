const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setColor(0xCF0000) 
        .setDescription('Lista de vehiculos habilitados: https://n9.cl/fc0gj')
        .setImage('https://i.imgur.com/zTVcAhu.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "parking2" 
};