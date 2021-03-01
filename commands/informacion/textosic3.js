const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Portal de citas médicas")
        .setDescription("Accede al portal de LSMA para indicar una nueva fecha para consulta o operación. Recuerda marcar la tarea una vez realizada. https://cutt.ly/llKQ4Ak")
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "citamedica" 
};