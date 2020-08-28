const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Ofertas 2020 Empresas - Seguro Extrahospitalario")
        .setDescription("\n - Seguro Básico: **2000$ / empleado** \n - Seguro Estándar: **2500$ / empleado** \n - Seguro Premium: **3200$ / empleado** \n \n (Estos pagos serían semanalmente. 30% de descuento en caso de pago mensual)")
        .setColor(0x037FDA) 
        .setURL('https://docs.google.com/document/d/1yrsaI5foK5JMlVOGlgNMXLXEEbn9XmNe4kRAEDPXXMw/edit?usp=sharing')
    message.channel.send({embed});

};


module.exports.help = {
    name: "seguroempresa" 
};