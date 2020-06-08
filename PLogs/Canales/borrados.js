const Discord = require("discord.js");

module.exports.run = async (bot, channel) => {
  let canalid = channel.id;
  let canalname = channel.name;
  let tipo = channel.type;
  
  if(!channel.guild) return;
  
  channel.guild.fetchAuditLogs().then(logs => { 
    
    let userID = logs.entries.first().executor.id;
    let userAvatar = logs.entries.first().executor.avatarURL();
    
    let Embed = new Discord.MessageEmbed()
      .setColor(0xFF0202)
      .setTitle("Canal eliminado")
      .setThumbnail(userAvatar)
      .addField("Canal", canalname)
      .addField("🆔 ID del canal 🆔", canalid)
      .addField("Tipo", tipo)  
      .addField("Por", `<@${userID}> (ID: ${userID})`)
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL())
    bot.channels.cache.get("716972685560774746").send(Embed);
    
  });
  
};

