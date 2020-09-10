const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("EQUIPAMIENTO MÉDICO")
        .setDescription("Detalles sobre nuestro equipamiento en UVI Movil: https://docs.google.com/document/d/1C9JTJgr55K6Z0QnEa3kueyDm6O5dattgMLbWxs9g4sM/edit?usp=sharing")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "datapc" 
};