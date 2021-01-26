const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Javier Valeiro")
        .setDescription("Hola, que tal, me presento mi nombre es Javier Valeiro ....  tengo que confesarles una cosa y es que soy **GAY** me da mucha pena decirlo pero es cierto desde que nacía me gustan los **HOMBRES** te amo abuela")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "valeiro" 
};