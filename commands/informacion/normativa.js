const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Autorizados por LSMA®")
        .setDescription("¡Hola! Se pone a disposición, esta lista de nuestros miembros del departamento médico autorizados a permanecer en el hospital y actuar como tal. \n \n \n **Director Médico** Jhon Wood \n \n **Director dept. Urgencias** Gustavo Cuevas \n \n **Dept. Salud Mental** Venancio Gutierrez \n \n **Enfermero** Marc Pinto \n \n **Auxiliar de enfermeria** Octavio Pando \n \n **Celador** Arturo Fernandez \n \n **Celador** Luke Brow \n \n **Celador** Mauro Suárez \n")
        .setColor(0xF8281B) 
        .setImage('https://i.imgur.com/CgXE8Vy.png')
        .setFooter('Pillbox® Data Center ', 'https://i.imgur.com/lCJUNKB.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "autorizados" 
};