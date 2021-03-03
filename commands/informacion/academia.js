const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Uniforme médico reglamentario")
        .setDescription("¡Este es el uniforme que debes portar si estas en el hospital! \n \n **Lista de la compra:** \n \n Tops 249 (0) - Tienda Surburban \n Camiseta 96 (0) - Tienda Mission Row \n Pantalones 129 (0) - Tienda Mission Row \n Torso 90 (0) - Cualquier tienda \n Zapatos 77 (4) - Tienda Mission Row \n \n **Pedir adicionalmente este /ropat:** \n /reportar Hola, necesito que me coloqueis el siguiente ropat: /ropat 7 126 0 ID \n \n *Los cambios de ropa se deberán hacer en la oficina de central antes de acudir al hospital. Recuerda que puedes guardar el conjunto para ponertelo de forma más rapida.*")
        .setColor(0xFFFFFF) 
        .setImage('https://i.imgur.com/Phin9KK.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "academia2" 
};