const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("LSMA DATA")
        .setDescription("Acceso a la aplicación LSMA DATA mobile \n \n ⌠**INFORME DE URGENCIAS**⌡ Rellena este informe en caso de acudir a un aviso, esto se incorporará a nuestra base de datos. https://forms.gle/xisRkRGZku9Dke1AA \n \n ⌠**PARTE DE INCIDENCIAS**⌡ Rellena este documento en caso de perdida de equipo, robo o accidente. https://forms.gle/BJ7kpuHeS4sJ9EnJA \n \n ⌠**TRASLADO SANITARIO NO URGENTE**⌡ Rellena este documento en caso de movilizar unidades para trasladar a un paciente de forma no urgente. https://forms.gle/cNGqSKxDNQTDRJUZ9")
        .setImage('https://cdn.discordapp.com/attachments/737590348372770816/737774218208608316/app.png')
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "lsma" 
};