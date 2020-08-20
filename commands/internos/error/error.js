const Discord = require("discord.js");
var embed;

module.exports.run = async (bot, message, tipo) => {

    switch(tipo){

        case 1:
            embed = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle("ERROR")
                .addField("Código de error", "0x0001")
                .addField("Estado","No has introducido todos los parámetros necesarios.")
                .addField("Plantilla del comando", bot.prefix+"declarar Servicio Ofrecido ,, Precio catálogo ,, Precio facturado ,, Notas adicionales")
                .setFooter("Un día sin sol es, ya sabes, de noche")
            message.author.send({embed}).catch();
        break;
        case 2:
            embed = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle("ERROR")
                .addField("Código de error", "0x0002")
                .addField("Estado","Recuerda que las cantidades de dinero se deben introducir sin puntos ni comas de por medio.")
                .setFooter("Me hago responsable de lo que digo, no de lo que entiendas")
            message.author.send({embed}).catch();
        break;

    }

}