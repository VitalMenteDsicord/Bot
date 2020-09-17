const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Aviso del uso de reacción")
        .setDescription("Para que se haga efectivo el uso del ticket o centralita, pulsa dos veces la reacción.")
        .setColor(0xF12D16) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "reaccion" 
};