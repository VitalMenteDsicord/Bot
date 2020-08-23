const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Contrato laboral")
        .setDescription("Contrato laboral para mostrar al nuevo miembro, antes de la firma: https://drive.google.com/file/d/13xvAHqA_NQbi8fEYSC2C9G7CR0ortlCk/view?usp=sharing \n \n Contrato laboral para proceder a la firma, despues de la firma IC: https://docs.google.com/document/d/1OTA9fHVv3aUjBRlwrJFOAXUpb-200HySWlTWfVq-iNQ/edit?usp=sharing") 
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "plantilla" 
};