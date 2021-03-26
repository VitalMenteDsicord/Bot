const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Autorizados por LSMA®")
        .setDescription("¡Hola! Se pone a disposición, esta lista de nuestros miembros del departamento médico de la LSMA® autorizados a permanecer en el hospital y actuar como tal. \n \n \n **Director General** Jhon Wood \n \n **Director dept. Médico** Marc Pinto \n \n **Director dept. Urgencias** Ignacio Rueda \n \n **Director dept. Salud Mental** Venancio Gutierrez \n \n **Enfermero** Nicholas Thompson  \n \n **Enfermero** Rafael Kudo \n \n **Enfermero** Vilet Adams  \n \n **Enfermero** Nicholas Thompson \n \n **Auxiliar de enfermeria** Ethan Weller \n \n **Celador** Arturo Fernandez \n \n **Celador** Luke Brow \n \n **Celador** Mauro Suárez \n \n **Celador** Francisco Auditore ")
        .setColor(0xF8281B) 
        .setImage('https://i.imgur.com/CgXE8Vy.png')
        .setFooter('Pillbox® Data Center ', 'https://i.imgur.com/lCJUNKB.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "autorizados22" 
};