const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Información de Psiquiatría")
        .setDescription("En LSMA hemos creado un nuevo servicio para adaptarse a los requerimientos de la ciudadanía, nuevo servicio de Psiquiatria: \n \n Podrás obtener ayuda con Trastornos de personalidad, daños causados por enfermedades mentales, trastornos sugestivos, síndromes, adicciones, problemas de comunicación con conyuge, rupturas amorosas... \n \n Tarifas: \n \n **1. Consulta básica → 500$** \n \n **2. Terapia → 1.300$ ** \n \n**3. Terapia Grupal → 1.700$ \n \n**4. Tarapia de Pareja → 2.000$**")
        .setImage('https://i.imgur.com/JqwkIRt.png')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "psiq" 
};