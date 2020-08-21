const Discord = require("discord.js");const generator = require('generate-password');

module.exports.run = async (bot, message) => {
    let prefix = bot.prefix;
    let argumentos = message.content.split(",,");

    let CantidadAP = argumentos[0].replace(prefix+"pago",'');let Beneficiario = argumentos[1];
    let Ncuenta = argumentos[2];let codigo = generator.generate({length: 5, numbers: true});

    if(!CantidadAP ||  !Beneficiario || !Ncuenta){let tipo = 3;errores.run(bot, message, tipo);return null};

    let embed = new Discord.MessageEmbed()
        .setTitle("PAGO").setColor(0xFFFF00)
        .setThumbnail("https://media.discordapp.net/attachments/708083728123035736/714744157985439894/latest.png")
        .addField("Código de pedido", CodigoPedido)
        .addField("Cantidad a pagar", "$ "+Importe)
        .addField("Número de cuenta", codigoCuen)
        .addField("Beneficiario", Beneficiario)
        .addField("Estado", "**Pendiente de pago**");
    message.channel.send({embed}).then(m => m.react("💵"));

};


module.exports.help = {
    name: "pago"
};