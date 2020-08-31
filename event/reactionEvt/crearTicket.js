const Discord = require("discord.js");const fs = require('fs');const db = require('megadb');

const TicketUser = new db.crearDB('iduser', 'tickets');
const TicketChannel = new db.crearDB('canal', 'tickets');

module.exports.run = async (bot, messageReaction, user) => {

    let datos = fs.readFileSync('/app/config/config.json');
    let dataT = JSON.parse(datos).Ticket;

    let usuario = messageReaction.message.channel.guild.members.cache.get(user.id).nickname;
    let servidor = messageReaction.message.channel.guild;

    let categoria = dataT.CTicketAbierto;
    let rolesTAB = dataT.RolesOpen;
    let userTicket = TicketUser.tiene(`${user.id}`) ? await TicketUser.obtener(`${user.id}`): 0;


    if(userTicket !== 0){return null};
    if(categoria === undefined || categoria === null){return null};
    if(usuario === null){return null};


    let canal = await servidor.channels.create(`Ticket-${usuario}`, {
        type: 'text',
        parent: categoria,
        permissionsOverwrites: 
        [
            {
                allow: ['VIEW_CHANNEL'],
                id: user.id
            }, 
            {
                deny: ['VIEW_CHANNEL'],
                id: servidor.id
            }
        ]
    });

    bot.channels.cache.get(canal.id).edit({parent: categoria, permissionOverwrites:[{deny: 'VIEW_CHANNEL',id: servidor.id }]})
    .then(async ch => {
        ch.updateOverwrite(user.id, {VIEW_CHANNEL: true});
        for(let i = 0; i<rolesTAB.length;i++){
            let role = rolesTAB[i];
            ch.updateOverwrite(role, {VIEW_CHANNEL: true});
        }
    });

  
  if(messageReaction.message.id === "747173925519229049"){
    
        let embed = new Discord.MessageEmbed()
          .setTitle("Su aviso ha llegado a centralita con éxito.")
          .setColor(0x037FDA)
          .setDescription("En un momento le atenderemos. Mientras tanto, indiquenos su emergencia. \n \n"+
          "Para cerrar el ticket reacciona con 🧻")
      canal.send({embed}).then(m => {m.react("🧻");});

      TicketUser.establecer(user.id, canal.id);
      TicketChannel.establecer(canal.id, user.id);  
      
  } 
  else if (messageReaction.message.id === "747228214253846660") {
    
      let embed = new Discord.MessageEmbed()
          .setTitle("Su ticket ha sido creado con éxito.")
          .setColor(0x037FDA)
          .setDescription("En un momento le atenderemos. Mientras tanto, indiquenos su nombre completo y la razón por la que nos contacta el día de hoy. \n \n"+
          "Para cerrar el ticket reacciona con 🧻")
      canal.send({embed}).then(m => {m.react("🧻");});

      TicketUser.establecer(user.id, canal.id);
      TicketChannel.establecer(canal.id, user.id);  
    
  }  
  else if (messageReaction.message.id === "747230794938056736" || messageReaction.message.id === "747230794938056736") {
    
      let embed = new Discord.MessageEmbed()
          .setTitle("Su ticket ha sido creado con éxito.")
          .setColor(0x037FDA)
          .setDescription("En un momento le atenderemos. Mientras tanto, indiquenos su nombre completo y a que departamento desea dirigir su ticket (Psiquiatria o Psicologia) \n \n"+
          "Para cerrar el ticket reacciona con 🧻")
      canal.send({embed}).then(m => {m.react("🧻");});

      TicketUser.establecer(user.id, canal.id);
      TicketChannel.establecer(canal.id, user.id);  
    
  }
  
  
};