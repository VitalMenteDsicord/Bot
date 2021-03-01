const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Portal de citas médicas")
        .setDescription("https://trello.com/invite/b/L3M9ETOF/ad429b4f68411c32e374f25347c391b6/citas-m%C3%A9dicas")
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "citamedica" 
};