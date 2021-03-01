const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Procedimiento - Apertura de una via (En camilla)")
        .setDescription("/me coge del bolsillo una pequeña cinta e intenta colocarsela al paciente en el brazo. \n \n /do Tras esto, ¿Las venas de su brazo serían visibles? \n \n /me coge un cateter, y procede a su colocación con sumo cuidado, tras esto lo enchufa al compresor.")
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoicc2" 
};