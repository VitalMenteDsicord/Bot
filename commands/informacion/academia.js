const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Uniforme médico")
        .setDescription("¡Este es el)
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "academia2" 
};