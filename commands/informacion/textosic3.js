const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Primeros pasos en un aviso")
        .setDescription("/me coge el equipamiento médico (botiquin y mochila de ataque) y se coloca los guantes de latex. \n \n /me examina al paciente, palpando su cuerpo en busca de hemorragias, hematomas y pertuberancias")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoic3" 
};