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
                .addField("Estado","Recuerda que en las cantidades de dinero los numeros con decimales se representan con un punto")
                .addField("Ejemplo", "10.25")
                .setFooter("Me hago responsable de lo que digo, no de lo que entiendas")
            message.author.send({embed}).catch();
        break;
        case 3:
            embed = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle("ERROR")
                .addField("Código de error", "0x0003")
                .addField("Estado","No has introducido todos los parámetros necesarios.")
                .addField("Plantilla del comando", bot.prefix+"pago Cantidad a pagar ,, Beneficiario ,, Número de cuenta")
                .setFooter("Previsión del tiempo para esta noche: estará oscuro")
            message.author.send({embed}).catch();
        break;
        case 4:
            embed = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle("ERROR")
                .addField("Código de error", "0x0004")
                .addField("Estado","Recuerda que el número de cuenta es la ID del usuario que recibe el dinero")
                .setFooter("Me hago responsable de lo que digo, no de lo que entiendas")
            message.author.send({embed}).catch();
        break;
        case 5:
            embed = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle("ERROR")
                .addField("Código de error", "0x0005")
                .addField("Estado","No tienes permisos suficientes para ejecutar este comando.")
                .setFooter("Tengo menos ganas de trabajar que el que le puso el nombre a los frutos del bosque")
            message.author.send({embed}).catch();
        break;
        case 6:
            embed = new Discord.MessageEmbed()
                .setColor(0xFF0000)
                .setTitle("ERROR")
                .addField("Código de error", "0x0006")
                .addField("Estado","Debes mencionar al usuario que desees revisar.")
                .setFooter("No puedo parar de pensar en ti desde que te presté dinero.")
            message.author.send({embed}).catch();
        break;
    
    }

}