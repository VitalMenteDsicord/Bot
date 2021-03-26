const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Psicoctenico")
        .setDescription("  Buenas gracias por confiar en nosotros \n Necesitamos que rellene esta plantilla:\n - Nombre: \n - Dia y hora  que deseas hacerte el psicoctenico  \n Gracias \n Att. LSMA® ")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "psicoctenico" 
};