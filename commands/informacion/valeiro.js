const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Ayden McDowell")
        .setDescription("Hola, que tal, me presento mi nombre es Ayden McDowell ....  soy **lider del Departamento del Sheriff** y todos los demas me comen los huevos, ademas pertenezco a **Major Crimes Bureau Head**, cambio.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "alex" 
};