const Discord = require("discord.js");const fs = require('fs');const db = require('megadb');

const TicketUser = new db.crearDB('iduser', 'tickets');
const TicketChannel = new db.crearDB('canal', 'tickets');


const TicketChannelA = new db.crearDB('canalesA','tickets');

module.exports.run = async (bot, messageReaction, user) => {

    let datos = fs.readFileSync('/app/config/config.json');
    let dataT = JSON.parse(datos).Ticket;

    let usuario = messageReaction.message.channel.guild.members.cache.get(user.id).nickanme;
    let servidor = messageReaction.message.channel.guild;
    let categoriaActual = messageReaction.message.channel.parentID;
    let canal = messageReaction.message.channel;

    let userTicket = TicketChannel.tiene(canal.id) ? await TicketChannel.obtener(canal.id): 0;

    let categoriaTAB = dataT.CTicketAbierto;let categoriaTC = dataT.CTicketCerrado;
    let rolesTAB = dataT.RolesOpen;let rolesTCE = dataT.RolesClosed;
    
    if(categoriaTAB === undefined || categoriaTAB === null){return null};
    if(categoriaTC === undefined || categoriaTC === null){return null};
    if(usuario === null){return null};
    if(categoriaActual !== categoriaTAB){return null};

    bot.channels.cache.get(canal.id).edit({parent: categoriaTC}).then(async ch => {
        
        ch.setParent(categoriaTC);
        ch.permissionOverwrites.get(userTicket).delete().catch();
        ch.updateOverwrite(servidor.id, {VIEW_CHANNEL: false});
        
        for(let i = 0; i<rolesTAB.length;i++){
            let role = rolesTAB[i];
            ch.permissionOverwrites.get(role).delete().catch();
        }
      
        for(let e = 0; e<rolesTCE.length;e++){
            let role2 = rolesTCE[e];
            ch.updateOverwrite(role2, {VIEW_CHANNEL: true});
        }
      
    });

    let embed = new Discord.MessageEmbed()
        .setTitle("Ticket cerrado")
        .setColor(0x037FDA)
        .addField("Cerrado por", usuario)
        .addField("Opciones","Eliminar ticket 🗑 ")
    canal.send({embed}).then(m=> {m.react("🗑");});

    TicketUser.eliminar(userTicket);TicketChannel.eliminar(canal.id);
    TicketChannelA.establecer(canal.id, userTicket);

};