const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()
        .setTitle("Servicio ofrecido por LSMA®")
        .setDescription("En LSMA hemos creado un nuevo departamento médico para la atención de todos los ciudadanos en Hospital de Pillbox Hills.")
        .setImage('https://i.imgur.com/6kfkzrs.png')
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "saludm2"
};