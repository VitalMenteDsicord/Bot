const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
     /*
      // EMERGENCIAS
    
    let embed = new Discord.MessageEmbed()
        .setTitle("Asistencia de Emergencias 24H.")
        .setColor(0x037FDA)
        .setDescription("¿Necesitas solicitar nuestra asistencia? Pulsa aquí📩 \n (Tiempo estimado de espera: De 2-5 minutos.)")
        .setFooter('LSMA® DATA CENTER', )
    message.channel.send({embed}).then(m => m.react("📩")).catch();
     
    */
  
  
      let embed = new Discord.MessageEmbed()
        .setTitle("Departamento de Salud Mental")
        .setColor(0x037FDA)    
        .setDescription("¡Habla con uno de nuestros expertos en el Departamento de Salud Mental \n (Tiempo estimado de espera: De 2-10 minutos.)")
        .setFooter('LSMA® DATA CENTER', )
    message.channel.send({embed}).then(m => m.react("📩")).catch();
};


module.exports.help = {
    name: "saludm"
};