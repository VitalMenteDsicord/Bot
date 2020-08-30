const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Guia médica avanzada")
        .setDescription("Tipos de heridas, y tratamiento de las mismas. \n \n \n  **Heridas superficiales:** Las heridas superficiales son las más habituales de encontrar, muestran sangrado leve visible, separación de los bordes de piel, y suciedad cubriendo la zona. \n - Limpieza de la zona
esta. Las medidas a tomar son las siguientes"
")
        .setColor(0xC2E512) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "heridas" 
};