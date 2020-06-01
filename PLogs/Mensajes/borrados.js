
const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let contenido = message.content;
    let messageid = message.id;
    let autor = message.author;
    let imagen = message.author.avatarURL();
  
  
    let Embed = new Discord.MessageEmbed()
      .setColor(0xFF0202)
      .setTitle("Mensaje eliminado")
    
    
};


