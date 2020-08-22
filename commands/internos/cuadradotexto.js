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
        //.setAuthor('LSMA', 'https://i.imgur.com/LJClyPX.png', 'https://www.lu-rp.es/foro/thread-10448.html')
        .setTitle("¡Bienvenid@ a nuestra aplicación!")
        .setDescription("Empresa médica dedicada a emergencias sanitarias, traslados no urgentes, farmacología y psquiatría ")
        .setColor(0x037FDA)
        .addField("Menú de navegación", "¡Accede directamente desde aquí al apartado que desees!")
    
        .addField("Nuestra empresa", "<#737592540877946970>" , true)
        .addField("Unete a nosotros", "<#737736774218154094>" , true)
        .addField("Farmacia", "<#737591727962980352>" , true)
    
        .addField("Seguro extrahospitalario", "<#737815244117901452>" , true)
        .addField("Unidad Psiquiatría", "<#746086788610916493>" , true)
        .addField("Ubicación", "<#737730544623812660>" , true)
  
    message.channel.send({embed});

};


module.exports.help = {
    name: "texto" // Comando que tienes que poner en discord 
};