const Discord = require('discord.js'); let { readdirSync } = require('fs'); 

function precenseUpdate(bot) {
    let datos = ["Los Santos Medical Assistance" , "¡Tu vida, es la nuestra!", "Leyendas Urbanas RP🎭"]
    setInterval(function() {
            bot.user.setActivity(datos[0], {type:'PLAYING'});
            setTimeout(function() {
                bot.user.setActivity(datos[1], {type:'PLAYING'});
                setTimeout(function() {
                    bot.user.setActivity(datos[2], {type:'PLAYING'});
                }, 5000)
            }, 5000)
    }, 15000)
}




module.exports = {
    precenseUpdate
}