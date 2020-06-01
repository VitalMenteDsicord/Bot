
const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
    if(message.author.id === bot.user.id){return null};
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
      .addField("Contenido del mensaje", contenido)
      .addField("🆔 Mensaje ID 🆔", messageid)
      .addField("Autor del mensaje", `<@${message.author.id}> (ID: ${message.author.id})`)
      .addField("Canal", message.channel)
      .addField("Por", `<@${userID}> (ID: ${userID})`)
      .setFooter(message.guild.name, message.guild.iconURL())
    bot.channels.cache.get("716962193475633164").send(Embed);
    });
  

    
};


