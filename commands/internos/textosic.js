const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Texto IC - Alta Voluntaria")
        .setDescription("/do Se vería como en el teléfono aparece el apartado de Altas Voluntarias de LSMA. Aparecerían varios detalles como el cese de[...] \n \n /do [...] responsabilidades de LSMA una vez firmado este documento. Abajo aparecerían dos casillas: NOMBRE, FIRMA.")
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoic" 
};