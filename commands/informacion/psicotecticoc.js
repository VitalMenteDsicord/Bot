const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Psicoctetico")
        .setDescription("Buenas gracias por confiar en nosotros \n Necesitamos que rellene esta po
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "sugerencia2" 
};