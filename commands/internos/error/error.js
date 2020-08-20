const Discord = require("discord.js");
var embed;

module.exports.run = async (bot, message, tipo) => {

    switch(tipo){

        case 1:
            embed = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle("ERROR")
                .addField("Código de error", "0x0001")
                
            message.author.send({embed}).catch();
        break;


    }

}