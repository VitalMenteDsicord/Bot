const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("")
        .setDescription("Unete a la empresa médica más avanzada de Los Santos, \n ¡Te estamos esperando! \n \n https://forms.gle/pPsaLT1bpup59wm2A")
        .setURL("https://forms.gle/pPsaLT1bpup59wm2A")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "DDDDDDDDDDDDDD" 
};