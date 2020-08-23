const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Texto IC - Alta Voluntaria")
        .setDescription("¡Bienvenido a la academia de LSMA! \n \n **LSMA ASISTENCIA SANITARIA**: ")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "academia" 
};