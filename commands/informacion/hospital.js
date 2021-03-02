const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("UCI (Cuidados Intensivos)")
        .setColor(0xF8281B) 
        .setImage('https://i.imgur.com/U2gj9vv.png')
        .setFooter('Pillbox® Data Center ', 'https://i.imgur.com/lCJUNKB.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "hospital" 
};