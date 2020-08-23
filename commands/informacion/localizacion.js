const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Los Santos Medical Assistance | Localización")
        .setColor(0x037FDA)
        .setDescription("¿Necesitas más información? ¡Charlemos! <#737592002358673420>")
        .setImage("https://cdn.discordapp.com/attachments/737730544623812660/746490970329317416/Localizacion.jpg")
    
    message.channel.send({embed}).catch();

}


module.exports.help = {
    name: "localizacion" 
};