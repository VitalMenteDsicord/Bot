const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Solicitud de Empleo")
        .setDescription("Mandanos tu curriculum a través de este formulario \n https://forms.gle/pPsaLT1bpup59wm2A")
        .setURL("https://forms.gle/pPsaLT1bpup59wm2A")
        .setColor(0x037FDA)
    
  	    .setFooter('LSMA® DATA CENTER ', 'https://images.vexels.com/media/users/3/136810/isolated/preview/85a11ddd9eaf0e9870707a68d640a5f8-icono-de-burbuja-de-servidor-by-vexels.png');
    message.channel.send({embed});

};


module.exports.help = {
    name: "unetetexto" 
};