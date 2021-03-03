const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Uniforme médico reglamentario")
        .setDescription("¡Este es el uniforme que debes portar si estas en el hospital!")
        .setColor(0xFFFFFF) 
        .setImage('https://i.imgur.com/Phin9KK.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "academia2" 
};