const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Autorizados por LSMA®")
        .setDescription("¡Hola! Se pone a disposición, esta lista de nuestros miembros del departamento médico autorizados a permanecer en el hospital y actuar como tal. \n \n \n **Director General** Jhon Wood \n \n **Director dept. Médico** Anastasia Anzilotti \n \n **Director dept. Urgencias** Gustavo Cuevas \n \n **Director dept. Salud Mental** Venancio Gutierrez \n \n **Enfermero** Marc Pinto \n \n **Celador** Arturo Fernandez \n \n **Celador** Luke Brow \n \n **Celador** Mauro Suárez \n \n **Enfermero** Nicholas Thompson \n \n **Auxiliar de enfermeria** Ethan Weller \n \n **Celador** Eustaquio Yuma \n \n **Celador** Francisco Auditore \n \n **Celador** Ryan Cold")
        .setColor(0xF8281B) 
        .setImage('https://i.imgur.com/CgXE8Vy.png')
        .setFooter('Pillbox® Data Center ', 'https://i.imgur.com/lCJUNKB.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "autorizados22" 
};