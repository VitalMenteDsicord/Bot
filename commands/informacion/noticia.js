const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Actualización 12/10/2020")
        .setDescription("- El canal de información de academia se utilizará para cuando se realicen clases grupales, por ese medio se informara de día y hora. \n - En el canal de material didáctico se almacenará información de códigos radiales, contenido de equipamiento, guía de procedimientos, clases y normativa. \n - En el canal de solicitud podréis pedir una clase personalizada si no pudises asistir a alguna. \n - Para que los aspirantes puedan patrullar, deberán tener la clase nº1 completada. Para subir de rango deberán hacer un examen.")
        .setColor(0xDB0F0F) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "noticia" 
};