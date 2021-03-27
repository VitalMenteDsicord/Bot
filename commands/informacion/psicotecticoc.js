const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Contacto: Psicotécnico")
        .setDescription("¡Hola! Gracias por confiar en nosotros para este procedimiento. \n \n Necesitamos que rellene esta plantilla: \n - Nombre: \n - Dia y hora en el que desea realizar el examen: \n \n Gracias de parte del Equipo de LSMA®. ")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "psicotecnico" 
};