const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Pillbox Hills Medical Center | Localización")
        .setColor(0x037FDA)
        .setDescription("Nos encontramos en Rockford Hills, entrada superior o por en frente de la estación de Autobuses de Los Santos")
        .setImage("https://static.wikia.nocookie.net/gtawiki/images/a/a7/PillboxHillMedicalCenter-GTAV.png")
    
    message.channel.send({embed}).catch();

}


module.exports.help = {
    name: "localizacion2" 
};