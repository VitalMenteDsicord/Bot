const funciones = require("./functions/functions.js");const errores = require("./error/error.js");
/* LIBRRIAS */
const Discord = require("discord.js"); const db = require('megadb'); const {readFileSync} = require("fs");

const userdata = new db.crearDB('iduser', 'tickets');
const channeldata = new db.crearDB('idcanal', 'tickets');

module.exports.run = async (bot, message) => {

    let datos = readFileSync('./config/config.json');
    let roles = JSON.parse(datos).Ticket.RepairTicket;

    let hasrole = await funciones.hasrole(message, roles);

    if(!hasrole){let tipo = 5;errores.run(bot, message, tipo);return null;}
    if(message.mentions.users.size < 1){let tipo = 6;errores.run(bot, message, tipo);return null};


    let server = message.guild.id;let user = message.mentions.users.first();
    let usuario = message.guild.members.cache.get(user.id).nickname;

    let canalUser = userdata.tiene(user.id) ? await userdata.obtener(user.id): 0;  

  
    if(usuario === null)
    {
      let embed = new Discord.MessageEmbed()
        .setTitle("ERROR ENCONTRADO")
        .setColor(0x920000) 
        .setDescription("El usuario <@"+user.id+"> no tiene establecido su apodo IC")
        .addField("Solución","/nick Nombre Apellido")
      message.author.send({embed}).catch();return null;
    }
    
    if(canalUser === 0)
    {
      let embed = new Discord.MessageEmbed()
        .setTitle("USUARIO CORRECTO")
        .setColor(0x00D74E)
        .setDescription("No se ha detectado ningún error al usuario <@"+user.id+">")
      message.author.send({embed}).catch();return null;
    }

  
    try {
      let canal = bot.channels.cache.get(canalUser).id;
      
      let embed = new Discord.MessageEmbed()
        .setTitle("ERROR ENCONTRADO")
        .setColor(0x920000)
        .setDescription("El usuario <@"+user.id+"> ya tiene un canal activo")
        .addField("Canal activo","<#"+canal+">")
      message.author.send({embed}).catch();
      
    } catch(err) {
      userdata.eliminar(user.id);
      channeldata.eliminar(canalUser);
      
      let embed = new Discord.MessageEmbed()
        .setTitle("ERROR ENCONTRADO")
        .setColor(0x920000)
        .setDescription("El usuario se encontraba activo en la base de datos, ya hemos corregido el error.")
      message.author.send({embed}).catch();
      
    }
  

  
  
}



module.exports.help = {
    name: "rtick"
};