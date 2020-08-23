const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("ID Médico")
        .setDescription("Inutilizado por el momento, hasta la incorporación de LSMA en la radio de LU-RP") 
        .setColor(0xEF060D) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "acreditaciones" 
};