const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Información de Psicología")
        .setDescription("Estamos trabajando dia y noche para crear la unidad psicologica de LSMA.")
        .setImage('https://i.imgur.com/cqdq5DT.jpg')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "psicologia"
};