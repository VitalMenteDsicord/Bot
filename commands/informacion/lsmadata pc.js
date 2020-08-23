const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("LSMA DATA")
        .setDescription("Acceso a la Aplicación de LSMA DATA PC")
        .setImage('https://cdn.discordapp.com/attachments/737821160485683312/737822654924324874/44444.png')
        .setColor(0xEF060D) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "datapc" 
};