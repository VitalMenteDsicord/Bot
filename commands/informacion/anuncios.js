const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Plantilla anuncios")
        .setDescription("/an Los Santos Medical Assistance | Empresa privada de Emergencias Sanitarias, Traslados no Urgentes, Farmacia Online. | +info LSMA APP \n \n /an ¿Tienes una empresa? Lleva un control de la salud de tus empleados, contrata ya nuestro Seguro Extrahospitalario | LSMA, accede a la APP. \n \n /an Los Santos Medical Assistance | ¡Te estamos buscando! ¿Quieres convertirte en técnico de emergencias sanitarias? | Unete hoy a LSMA.") 
        .setColor(0x037FDA) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "anuncios" 
};