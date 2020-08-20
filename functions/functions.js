const Discord = require('discord.js'); let { readdirSync } = require('fs'); 

function precenseUpdate(bot) {
    let datos = ["Weazel News 📰" , "¡Dando las verdaderas noticias!", "Leyendas Urbanas RP🎭"]
    setInterval(function() {
            bot.user.setActivity(datos[0], {type:'PLAYING'});
            setTimeout(function() {
                bot.user.setActivity(datos[1], {type:'PLAYING'});
                setTimeout(function() {
                    bot.user.setActivity(datos[2], {type:'PLAYING'});
                    setTimeout(function() {
                        bot.user.setActivity("Prefijo actual "+bot.prefix, {type:'PLAYING'});
                    }, 5000)
                }, 5000)
            }, 5000)
    }, 20000)
}




module.exports = {
    precenseUpdate
}