const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Actualización 03/09/2020 LSMA®")
        .setDescription("Estas son las labores que se realizarán hoy: \n \n - Expulsión de miembros inactivos \n - Organización del evento de Picnic Comunitario \n - Selección de miembros para requerimiento en Evento. \n - Nuevos textos en Textos IC \n")
        .setColor(0xDD0B0B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "aviso"
};