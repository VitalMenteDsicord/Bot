const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Procedimiento - Retirar sangre y analítica")
        .setDescription("/do Un celador llevaría al paciente hacia el BOX correspondiente. (Aquel donde acude el médico) \n \n /do Le realizarian toma de tensión, oxigeno en sangre y pulsaciones al paciente. \n \n /do ¿El paciente tendría algún parametro fuera de lo común? Si es así, ¿Cual?")
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoicc222" 
};