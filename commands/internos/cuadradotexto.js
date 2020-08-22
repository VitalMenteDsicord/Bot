const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

  
  // Colores: https://htmlcolorcodes.com/es/
  
  /*
    Plantilla completa EMBED:
    
    	.setColor('#0099ff')
	    .setTitle('Some title')
	    .setURL('https://discord.js.org/')
	    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	    .setDescription('Some description here')
	    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
	    .addFields(
		    { name: 'Regular field title', value: 'Some value here' },
		    { name: '\u200B', value: '\u200B' },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
	    )
	    .addField('Inline field title', 'Some value here', true)
	  .setImage('https://i.imgur.com/wSTFkRM.png')
	  .setTimestamp()
	  .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
  */
  
  
    let embed = new Discord.MessageEmbed()
        .setAuthor('LSMA', 'https://i.imgur.com/LJClyPX.png', 'https://www.lu-rp.es/foro/thread-10448.html')
        .setTitle("¡Bienvenido a nuestra aplicación! TEST")
        .setColor(0x037FDA)
        .addField("Estado", "**Pendiente de pago**");
    message.channel.send({embed});

};


module.exports.help = {
    name: "texto" // Comando que tienes que poner en discord 
};