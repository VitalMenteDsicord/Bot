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

function LoadC(bot) {
  
  console.log("[COMANDOS INTERNOS]");
  for(const file of readdirSync('./commands/internos/')) { 
    if(file.endsWith(".js")){
        let archivo = require(`./commands/internos/${file}`); 
        let aliases;
        try {aliases = archivo.help.aliases.length;} catch(err){};
        if(aliases > 0 && aliases !== undefined) {
            for(let i = 0; i < aliases; i++){bot.comandosIN.set(archivo.help.aliases[i], archivo)};
            bot.comandosIN.set(archivo.help.name, archivo);console.log(`${archivo.help.name}.js cargado con ${aliases} alias`);
        } else {console.log(`${archivo.help.name}.js cargado`);bot.comandosIN.set(archivo.help.name, archivo)};
    };
  };
  
}


function reloadC(bot) {
  console.log("》 RECARGANDO COMANDOS 《")
  
  for(const file of readdirSync('./commands/internos/')) { 
    if(file.endsWith(".js")){
      delete require.cache[require.resolve(`./commands/internos/${file}`)]
    };
  };
  
  LoadC(bot)
  
};

module.exports = {
    precenseUpdate,
    reloadC
}