const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

  
  // Colores: https://htmlcolorcodes.com/es/
  
  /*
    Plantilla completa EMBED:
    
    	.setColor('#0099ff')
	    .setTitle('Some title')
	    .setURL('https://docs.google.com/document/d/1yrsaI5foK5JMlVOGlgNMXLXEEbn9XmNe4kRAEDPXXMw/edit?usp=sharing')
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
	  .setImage('https://i.imgur.com/6acg7sv.png')
	  .setTimestamp()
	  .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
  */
  
  
    let embed = new Discord.MessageEmbed()
        //.setAuthor('LSMA', 'https://i.imgur.com/LJClyPX.png', 'https://www.lu-rp.es/foro/thread-10448.html')
        .setTitle("Pillbox Hills Medical Center")
        .setDescription("Sistema automatizado diseñado por y para el departamento médico de Los Santos Medical Assistance.")
        .setColor(0x037FDA)
        .addField("Menú de navegación", "¡Accede directamente desde aquí al apartado que desees!")
    
        .addField("Nuestra empresa", "<#737592540877946970>" , true)
        .addField("Unete a nosotros", "<#737736774218154094>" , true)
        .addField("Farmacia", "<#737591727962980352>" , true)
    
        .addField("Contacto Emergencias", "<#737590914402353224>" , true)
        .addField("Salud Mental", "<#749870390012280833>" , true)
        .addField("Ubicación", "<#737730544623812660>" , true)
    
  	    .setFooter('LSMA® DATA CENTER ', 'https://images.vexels.com/media/users/3/136810/isolated/preview/85a11ddd9eaf0e9870707a68d640a5f8-icono-de-burbuja-de-servidor-by-vexels.png');
    message.channel.send({embed});

  
  // `Puedo meter variables dentro ${message}`, 'Solo texto' , "Solo texto"
};


module.exports.help = {
    name: "unetetexto2" // Comando que tienes que poner en discord 
};