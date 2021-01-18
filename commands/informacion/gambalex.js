const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Gambalex es GAY")
        .setDescription("¡Hola a todos! **SOY GAY**")
        .setColor(0xDD0B0B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "gambalex"
};