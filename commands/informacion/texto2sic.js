const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Guía médica")
        .setDescription("¡Aquí puedes encontrar más detalles de la guía médica que iremos actualizando y llenando! https://cutt.ly/ll1HtWd")
        .setColor(0xFFFFFF) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoicc222" 
};