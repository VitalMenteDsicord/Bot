const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Procedimiento - Retirada de sangre")
        .setDescription("/me coge una cinta y posteriormente procede a su colocación en la zona del antebrazo observando al paciente. \n \n /do ¿Las venas serían facilmente reconocibles? \n \n /me coge una jeringa y procede a destapar el capuchón tras esto la prepara. \n \n /me procede con la retirada de sangre, yendo poco a poco y observando al paciente. \n \n /do ¿Se resistira? ¿Cual sería su reacción? \n \n /me una vez extraida la sangre, procede a retirar la jeringa y lo mete en un pequeño bote. \n \n **(Una vez realizado deberíamos llevarlo al laboratorio para que sea examinada)** \n \n /do Se escucharía sonidos provenientes del laboratorio. Beep, boop. Beep, boop. \n \n /do Tras unos 15 minutos los resultados estarían listos.")
        .setColor(0xF8281B) 
    message.channel.send({embed});

};


module.exports.help = {
    name: "citamedica22" 
};