const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Procedimiento - Disparo de bala")
        .setDescription("/me comprueba si la hemorragia se encuentra activa, observando detalladamente. \n \n /do ¿El paciente tendría hemorragia activa en estos momentos? \n \n **(SI)** Coge unas gasas e intenta parar el sangrado de la herida. \n \n /do ¿Pararía la hemorragia con éxito este procedimiento? \n \n **(En caso de que no pare)** /me coge del cajón vendaje compresivo e intenta colocarselo en la zona. \n \n ¿Finalmente con ayuda del vendaje compresivo pararía la hemorragia con éxito? \n \n **(NO)** /me procede a colocar clorhexidina en la zona para la debida desinfección de la zona y observa la herida. \n \n /do ¿Tendría la herida de entrada y salida, o la bala se encontraría en su interior? \n \n **(En caso de que este dentro)** /do Se vería a un equipo de celadores trasladar al sujeto hacia el quirofano. \n \n **(En caso de no operar nosotros)** /do Los cirujanos llegarían a la sala y procederían con la anestesia. Tras esto, procederían a retirar la bala. \n \n /do ¿Sería posible retirar la bala al primer intento? \n \n **(En caso de que no sea posible repetiremos el proceso de retirada, con ayuda de uns pinzas y haciendo una incisión en la zona.)**")
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoicc2" 
};