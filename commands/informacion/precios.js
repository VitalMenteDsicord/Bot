const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Precios LSMA®")
        .setDescription("Estos son los precios para eventos: \n \n - **UVI:** $5000 **- **VIR:** $7000 \n - **Hospital de Campaña:** $5000 \n - **Unidad Aerea: $7500**  \n - **Paramedico que asista:**   \n -  ")
        .setColor(0xDD0B0B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "precios"
};