const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  
    let embed = new Discord.MessageEmbed()

        .setTitle("Parking subterraneo | Abierto las 24h.")
        .setDescription("Funcionamiento: Cada persona tiene 2 plazas de aparcamiento en este parking para sus vehículos, unicamente se podrá usar para dejar el vehiculo aparcado una vez empezamos el servicio. \n \n En este canal se deberá indicar **matricula, modelo y dueño del mismo.** Si tu vehículo no está en esta lista se procederá a retirar.")
        .setColor(0xD4D4D4) 
        .setImage('https://i.imgur.com/1YX2fUa.png')
    message.channel.send({embed});

};


module.exports.help = {
    name: "parking" 
};