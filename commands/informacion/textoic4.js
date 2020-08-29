const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Códigos radiales LSMA")
        .setDescription("**10-00** Precaución \n **10-04** Recibido/Afirmativo \n **10-05** Patrullaje \n **10-06** Ocupado \n **10-08** De servicio \n **10-09** Repita comunicación \n **10-10** Salir de servicio \n **10-20** Ubicación \n **10-23** Mantegase a la espera \n **10-31** Persona sospechosa o peligrosa \n **10-32** Se requiere presencia de unidad policial adicional \n **10-36** Se requiere unidad aérea \n **10-37** Se requiere unidad grúa \n **10-38** Se requiere una unidad médica \n **10-39** Se require una unidad de bomberos \n **10-46** Accidente con personas heridas \n **10-47** Incendio \n **10-60** Mantenimiento de vehículo \n **10-61** Pausa/Descanso \n **10-74** Negativo \n **10-90** Falsa alarma \n **10-91** Se requiere de un supervisor \n **10-200** Se requieren refuerzos \n \n (Abreviaturas) \n *PH: Persona herida* \n *CT: Colisión de tráfico*")
        .setColor(0xEA0E14 ) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoic4" 
};