const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("LSMA DATA | BASE DE DATOS")
        .setDescription("Panel interno: https://docs.google.com/spreadsheets/d/1TwX5QteTtwW_Zpgnnm87NcL4bOoLGTstYSJJ2Rvgz0Y/edit?usp=sharing")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "basedatos" 
};