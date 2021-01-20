const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("(Nuevo Evento) Gymnasium - Nº servicio: 0007 Viernes 22/01/2020") 
        .setDescription("**Ubicación:** Campo de Golf, Rockford Hills. \n **Hora del evento:** 22:00 (Hora peninsular española) \n **Hora de preparacion:** 21:30  \n **Hora de finalizacion del evento:** 23:00 \n \n **Ubicacion:** Vienwood Hills \n \n **Unidades solicitadas:** 1 UVI y 2 Paramedicos")
        .setColor(0x38BFB9) 
        .setImage('https://cdn.discordapp.com/attachments/801488850991841311/801494455663722506/image0.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "evento" 
};