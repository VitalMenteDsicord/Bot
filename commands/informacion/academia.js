const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Lista de copagos")
        .setDescription("Aquí podéis ver nuestras tarifas para algunas intervenciones: ")
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "academia2" 
};