const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Uniforme médico reglamentario")
        .setDescription("¡Este es el uniforme que debes portar si estas en el hospital! \n \n **Lista de tiendas:** \n Mission Row \n Sub-Urban \n \n **Lista de ropa:** \n \n **Solicitar:** \n /reportar Necesito que me coloquéis el siguiente ropat: /ropat 7 126 0 ID")
        .setColor(0xF8281B) 
        .setImage('https://i.imgur.com/Phin9KK.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "academia2" 
};