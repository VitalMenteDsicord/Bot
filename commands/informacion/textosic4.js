const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Protócolo de Asistencia prioritario")
        .setDescription("Al llegar al lugar de los hechos de un accidente, hay que asegurarse de seguir estos pasos: \n \n 1. Al llegar a dicho lugar, nos aseguraremos de dejar una distancia de seguridad entre nuestro vehículo y el paciente (En caso de tratarse de un CT, la distancia de seguridad será mayor) \n \n2. Lo primero que debemos hacer al tratar al paciente, será consultar los siguientes puntos: El estado del mismo, comprobar si tiene hemorragias activas, tomarle las constantes vitales con ayuda de un oximetro. Esto debe seguirse en el exacto orden mencionado. \n \n **(No perderemos el tiempo en tomar las constantes en caso de ser mas necesario el traslado, por ejemplo en un caso donde hay un herido de bala)** \n \n 3. Una vez asegurada la estabilidad del sujeto es hora de realizar la inmovilización del mismo. Esto solo será necesario si este posee algún daño cervical/óseo. Se tendrá que recoger la tabla espinal de la unidad UVI, y una vez la tengamos realizaremos estos pasos: \n \n **Collarín:** Para colocar un collarín, debe haber con nosotros un compañero que realice control cervical al paciente, sujetando los puntos cervicales para estabilizar el cuello de forma de que este quede firme. Mientras nosotros abrimos el collarín, y medimos el diametro del cuello del paciente. Luego procederemos a su colocación. \n \n **Tabla espinal:** Deberemos proceder a lateralizar 45º al paciente, mientras que otro deberá deslizar la tabla por debajo del mismo. La misma persona encargada de la lateralización, bajará al paciente y lo asegurará con ayuda de sinchas. \n \n **(Una vez realizados estos dos pasos, podremos continuar subiendo al sujeto en la camilla respectiva en la parte traséra de la unidad)**")
        .setColor(0x8512E5 ) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "textoic5" 
};