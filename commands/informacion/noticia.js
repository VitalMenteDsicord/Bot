const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Cambios internos 07/10/2020")
        .setDescription(" \n - Dentro de la facción habrá especialistas médicos, que podrán realizar operaciones dentro del Hospital y recibirán un gran payday. \n - Comisiones por tu desempeño dentro del Hospital. \n - Creación de nuevos roles, ya que tenemos que transportar al herido dentro del hospital además de rolear con él dentro. \n - Semana de reclutamiento. Puesto de RRHH y campañas públicitarias.")
        .setColor(0xDB0F0F) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "noticia" 
};