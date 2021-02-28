const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Ups, parece que aquí no hay nada que mostrar.") 
        .setDescription("En nada aquí apareceran los miembros de nuestro departamento, somos personas y a veces también tardones. \n \n ¡Te pedimos paciencia usuario!")
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "evento2" 
};