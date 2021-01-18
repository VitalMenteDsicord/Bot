const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("(Recordatorio) Evento Police Department, Viernes 4")
        .setDescription("**Ubicación:** Campo de Golf, Rockford Hills. \n **Hora del evento:** 22:00 (Hora peninsular española) \n **¿Que realizaremos alli?** Haremos un pequeño curso de primeros auxilios y mostraremos nuestras unidades con detalle. \n \n Recordamos que todos los que acudan tendrán un plus de 10.000$ y que se deberá entrar con anticipación para la preparación.")
        .setColor(0x037FDA) 
        .setImage('https://i.imgur.com/6acg7sv.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "evento" 
};