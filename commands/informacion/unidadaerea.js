const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Prueba División Aerea")
        .setColor(0xF8281B)
        .setDescription("Esta es la lista de aceptados:")
        .setImage("https://static.wikia.nocookie.net/gtawiki/images/a/a7/PillboxHillMedicalCenter-GTAV.png")
    
    message.channel.send({embed}).catch();

}


module.exports.help = {
    name: "unidadaerea" 
};