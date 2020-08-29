const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Los Santos Medical Assistance | Localización")
        .setColor(0x037FDA)
        .setDescription("Nos encontramos justo en frente de LifeInvader, en Rockford Hills. ¿Tienes alguna duda? mandanos un correo a **info@lsma.es**")
        .setImage("https://i.imgur.com/nrIN7ez.jpg")
    
    message.channel.send({embed}).catch();

}


module.exports.help = {
    name: "localizacion" 
};