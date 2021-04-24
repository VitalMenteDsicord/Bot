const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Sugerencias")
        .setDescription("· Añade aqui yu sugerencia,sera siempre bien acogida.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "sugerencia2" 
};