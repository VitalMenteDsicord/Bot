const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Precios LSMA®")
        .setDescription("Estos son los precios para eventos: \n \n - **UVI:** $5000 /hora \n \n - **VIR:** $7000  /hora \n \n - Hospital de Campaña $5000 /hora \n \n - Unidad Aerea $7500 /hora \n \n - Paramedico que asista $2500 /hora \n \n Se debera pedir los servicios 72 horas con antipacion.  ")
        .setColor(0xDD0B0B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "precios"
};