const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("EQUIPAMIENTO MÉDICO VIR")
        .setDescription("Detalles sobre nuestro equipamiento en Vehiculo de Intervención Rápida: https://docs.google.com/document/d/1HLoLfMZiwqtiqPDalFEcnzUMnKwDjwbN5GC8GH00CT0/edit?usp=sharing")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "equipamiento" 
};