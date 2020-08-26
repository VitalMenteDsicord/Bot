const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

  
    let embed = new Discord.MessageEmbed()
        .setColor(0x00F221)
        .setImage('https://i.imgur.com/jxsdoNO.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "unidades" 
};