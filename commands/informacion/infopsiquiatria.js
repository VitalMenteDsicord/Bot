const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()
        .setTitle("Información de Psicología")
        .setDescription("En LSMA hemos creado un nuevo servicio para adaptarse a los requerimientos de la ciudadanía, nuevo Departamento de Salud Mental: \n \n Podrás obtener ayuda con problemas sociales, rupturas amorosas, trastorno de estres postraumatico (TEPT), fobias y miedos... \n \n Tarifas: \n \n **1. Consulta básica → 500$** \n \n **2. Terapia → 1.300$ ** \n \n **3. Terapia grupal → 1.500$ (p/p) ** \n \n**4. Taller de prevención → 5.000$** \n \n **5. Examen psicotécnico → 5.000 $** \n \n (Tarifas de consulta por cada 15 minutos.)")
        .setImage('https://i.imgur.com/JqwkIRt.png')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "psicologia2" 
};