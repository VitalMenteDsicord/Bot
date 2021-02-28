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
        .setDescription("Sistema automatizado diseñado por y para el departamento médico de Los Santos Medical Assistance para mayor coordinación.")
        .setColor(0xF8281B)
        .addField("Menú de navegación", "¡Accede directamente desde aquí al apartado que desees!")
    
        .addField("Contacto directo", "<#815651832515919902>" , true)
        .addField("Unete a nosotros", "<#737736774218154094>" , true)
        .addField("Autorizados", "<#815652491311054849>" , true)
    
        .addField("Información", "<#815658086609322054>" , true)
        .addField("Psicotécnicos", "<#746086878503239822>" , true)
        .addField("Ubicación", "<#815651444312506388>" , true)
    
  	    .setFooter('Pillbox® Data Center ', 'https://i.imgur.com/lCJUNKB.png');
    message.channel.send({embed});

  
  // `Puedo meter variables dentro ${message}`, 'Solo texto' , "Solo texto"
};


module.exports.help = {
    name: "unetetexto2" // Comando que tienes que poner en discord 
};