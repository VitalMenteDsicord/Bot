
const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let contenido = message.content;
    let messageid = message.id;
    let autor = message.author;
  
    message.guild.fetchAuditLogs().then(logs => { 
      
      let userID = logs.entries.first().executor.id;
      let userAvatar = logs.entries.first().executor.avatarURL();  
      
    let Embed = new Discord.MessageEmbed()
      .setColor(0xFF0202)
      .setTitle("Mensaje eliminado")
      .setThumbnail(userAvatar)
      .addField("Por", `<@${userID}> (ID: ${userID})`)
    
    });
  

    
};


