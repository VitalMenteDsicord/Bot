const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()
        .setTitle("Servicio ofrecido por LSMA®")
        .setDescription("En LSMA hemos creado un nuevo departamento médico para la atención de todos los ciudadanos en Hospital de Pillbox Hills. \n \n **Realizamos los siguientes servicios dentro del hospital:** \n \n - Operaciones quirurgicas. \n \n - Consultas médicas generales. \n \n - Atención de Urgencia. \n \n - TAC y pruebas diagnósticas. \n \n - Atención psicologica individual, pareja y en grupo. \n \n - Psicotécnicos para Caza \n \n - Consulta especializada para atención especial. \n \n - Parto y atención al embarazo. \n \n **Para más información contacta con nosotros en <#815651832515919902>** ")
        .setImage('https://i.imgur.com/OHUkdOW.png')
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "saludm2"
};