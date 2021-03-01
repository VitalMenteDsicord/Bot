const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Procedimiento - Alta de Hospital")
        .setDescription("/do Llega al box, un celador junto a varios papeles donde incluirian detalles sobre el ingreso del paciente. \n \n /do En estos, aparecerían datos del paciente y actos realizados en el hospital. Debajo del todo, una firma del médico y LSMA. \n \n /do Le harian entrega de los respectivos documentos al paciente. \n \n **(En caso de no rolear el acompañar al sujeto hacia la recepción)** /do Tras esto, le acompañarian hacia la recepción mientras se observa a varias personas aplaudir por la recuperación. ")
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "citamedica22" 
};