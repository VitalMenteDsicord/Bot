const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("LSMA DATA | BASE DE DATOS")
        .setDescription("Panel interno: https://docs.google.com/spreadsheets/d/1TwX5QteTtwW_Zpgnnm87NcL4bOoLGTstYSJJ2Rvgz0Y/edit?usp=sharing \n Instalaciones de Hospitales Públicos de Los Santos: https://docs.google.com/document/d/1sXd1Q1W_wXRNt84IwPOJKKoYpwez8q5VQEy6l_uZeyQ/edit?usp=sharing \n Radio Temporal TS3: LSMA.TEAMSPEAK.DE")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "basedatos" 
};