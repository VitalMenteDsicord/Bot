const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Cambios internos 24/09/2020")
        .setDescription("- Se añade trello para la gestión interna de cúpula LSMA®. \n - Se incorporará un nuevo sistema de academia en el que se está trabajando. \n - Nuevo aparcamiento privado, se creará un canal para tener organización dentro de él. \n \n **¡Pronto tendréis más noticias!**")
        .setColor(0xDB0F0F) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "noticia" 
};