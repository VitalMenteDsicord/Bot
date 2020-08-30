const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Guia médica avanzada")
        .setDescription("Tipos de heridas, y tratamiento de las mismas. \n \n \n  **Heridas superficiales:** Las heridas superficiales son las más habituales de encontrar, muestran sangrado leve visible, separación de los bordes de piel, y suciedad cubriendo la zona. \n \n - La limpieza de la herida se tiene que hacer en base a 2 productos por lo general, gasasy un antiséptico: El antiséptico más usado es el peroxido de hidrogeno (agua oxigenada), sirve para limpiar como para desinfectar. Pues bien, una vez sabiendo esto, aplicamos presión leve sobre las zonas afectadas con gasas. (Este proceso se debe realizar en cada incidente médico, como primera actuación, dependiendo de los varios entornos, se precisara realizar más operaciones o no). \n \n "")
        .setColor(0xC2E512) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "heridas" 
};