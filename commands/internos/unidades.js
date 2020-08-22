const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

  
    let embed = new Discord.MessageEmbed()
        .setTitle("Soporte Vital Avanzado")
        .setDescription('Disponible.')
        .setColor(0x00F221)
        .setImage('https://i.imgur.com/3We2OWv.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "unidades" 
};