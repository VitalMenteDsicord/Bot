const funciones = require("./functions/functions.js"); const errores = require("./error/error.js");
/* LIBRRIAS */
const Discord = require("discord.js"); const db = require('megadb'); const {readFileSync} = require("fs");
/*DATA */
const Dinero = new db.crearDB('dinero', 'Contabilidad');

module.exports.run = async (bot, message) => {
    let prefix = bot.prefix;

    let datos = readFileSync('./config/config.json');
    let channel = JSON.parse(datos).CInternos.RDinero;

    let argumentos = message.content.split(",,");
    let DeclaradoAC = Dinero.tiene(`${message.guild.id}.declarado`) ? await Dinero.obtener(`${message.guild.id}.declarado`): 0;


    /* Todo listo */ 
    let ServicioOF = argumentos[0].replace(prefix+"declarar",'');
    let PrecioCa =  Number(argumentos[1]);let PrecioFa = Number(argumentos[2]);
    let NotasAD = argumentos[3];

    if(!ServicioOF ||  !PrecioCa || !PrecioFa || !NotasAD){let tipo = 1;;errores.run(bot, message, tipo);return null};
    if(PrecioFa === "NaN" ||  PrecioCa === "NaN"){let tipo = 2;;errores.run(bot, message, tipo);return null};

    Dinero.establecer(`${message.guild.id}.declarado`, DeclaradoAC + PrecioFa);
    
    let embed = new Discord.MessageEmbed()
        .setColor(0xFF2D00)
        .setTitle("Registro de pagos")
        .setThumbnail("https://media.discordapp.net/attachments/708083728123035736/714404437384364062/PinClipart.com_note-pad-clip-art_1706747.png?width=806&height=702")
        .addField("Servicio Ofrecido", ServicioOF)
        .addField("Precio catálogo", "$ "+PrecioCa)
        .addField("Precio facturado", "$ "+PrecioFa)
        .addField("Notas adicionales", NotasAD)
        .addField("Dinero transferido a cúpula", "NO")
    bot.channels.cache.get(channel).send({embed}).then(m =>{m.react('💰');}).catch();

}

module.exports.help = {
    name: "declarar"
}