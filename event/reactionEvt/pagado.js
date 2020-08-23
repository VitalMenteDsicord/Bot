/* Librerias */
const Discord = require("discord.js");
var embed;


module.exports.run = async (bot, messageReaction, user) => {
  
    messageReaction.message.channel.messages.fetch(messageReaction.message.id).then(m => {
     
    if(m.embeds[0].fields[4].value === "**Pendiente de pago**")
    {
     embed = new Discord.MessageEmbed()
       .setColor(0x00FF08)
       .setTitle(m.embeds[0].title)
       .setThumbnail("https://media.discordapp.net/attachments/708083728123035736/714744157985439894/latest.png")
       .addField(m.embeds[0].fields[0].name, m.embeds[0].fields[0].value)
       .addField(m.embeds[0].fields[1].name, m.embeds[0].fields[1].value)
       .addField(m.embeds[0].fields[2].name, m.embeds[0].fields[2].value)
       .addField(m.embeds[0].fields[3].name, m.embeds[0].fields[3].value)  
       .addField(m.embeds[0].fields[4].name, "**Pagado**")         
     m.edit(embed).catch(); 
    } 
    else{return null;};

  });  
  
};