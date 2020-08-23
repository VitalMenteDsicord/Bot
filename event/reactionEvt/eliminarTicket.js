const Discord = require("discord.js");const fs = require('fs');const db = require('megadb');

const TicketChannelA = new db.crearDB('canalesA','tickets');


module.exports.run = async (bot, messageReaction, user) => {
      
    let datos = fs.readFileSync('/app/config/config.json');
    let dataT = JSON.parse(datos).Ticket;

    let categoriaActual = messageReaction.message.channel.parentID;
    let servidor = messageReaction.message.channel.guild;
    let canal = messageReaction.message.channel;
    let rolesTCE = dataT.RolesClosed; let categoriaTC = dataT.CTicketCerrado;

    if(categoriaActual !== categoriaTC){return null}

    for(let i = 0;i<rolesTCE.length; i++){
        let role = rolesTCE[i];
        let hasrole = servidor.members.cache.get(user.id)._roles.includes(role);
        if(hasrole)
        {
            try {
                bot.channels.cache.get(canal.id).delete();
                TicketChannelA.eliminar(canal.id);
            } catch(err){console.log(err)}
        }
    }

};