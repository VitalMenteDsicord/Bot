const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Normativa Interna | Modificación en punto 6")
        .setDescription("Se modifica a partir del día 31/08 de 2020, el punto 6.1 y 6.2 del contrato laboral. \n \n A partir de este momento, se podrá pertenecer a otra empresa mientras no tenga relación con la sanidad y siempre con permiso expreso de la cúpula de LSMA. \n\n ((No se podrá pertenecer a una facción mientras se está en LSMA))")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "ac1" 
};