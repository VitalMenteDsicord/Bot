const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("¡Recomiendanos!")
        .setDescription("¿Quieres felicitar a la empresa o algún miembro de la misma? Hazlo con la siguiente plantilla: \n \n Tipo de intervención: *Ejemplo: Accidente entre dos furgonetas en Little Seoul.* \n Día del suceso: *XX/XX/2020* \n ¿Que te ha parecido la atención recibida?: --")
        .setImage('https://i.imgur.com/qmqkgHl.png')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "recomendaciones" 
};