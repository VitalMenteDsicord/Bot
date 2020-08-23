const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
     /*
      // EMERGENCIAS
    
    let embed = new Discord.MessageEmbed()
        .setTitle("Soporte en linea")
        .setColor(0xE5C62A)
        .setDescription("¿Necesitas solicitar nuestra asistencia")
    message.channel.send({embed}).then(m => m.react("📩")).catch();
     
     
     
     
     */
      let embed = new Discord.MessageEmbed()
        .setTitle("Asistencia de Emergencias 24H.")
        .setColor(0x037FDA)
        .setDescription("¿Necesitas solicitar nuestra asistencia? Pulsa aquí📩 \n (Tiempo estimado de espera: De 2-5 minutos.)")
        .setFooter('LSMA® DATA CENTER', 'https://images.vexels.com/media/users/3/136810/isolated/preview/85a11ddd9eaf0e9870707a68d640a5f8-icono-de-burbuja-de-servidor-by-vexels.png')
    message.channel.send({embed}).then(m => m.react("📩")).catch();
};


module.exports.help = {
    name: "Tinfo"
};