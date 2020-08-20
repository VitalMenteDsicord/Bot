const Discord = require("discord.js");const generator = require('generate-password');




module.exports.run = async (bot, message) => {
    let prefix = bot.prefix;
    let argumentos = message.content.split(",,");

    let CantidadAP = argumentos[0].replace(prefix+"pago",'');
    let Beneficiario = argumentos[1];
    let Ncuenta = argumentos[2];
    let codigo = generator.generate({length: 5, numbers: true});



    
};


module.exports.help = {
    name: "dinero"
};