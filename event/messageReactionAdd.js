const Discord = require("discord.js");

module.exports = (bot, messageReaction, user) => {

    try {
        if(user.id === bot.user.id){return null;};
        var emojiname = messageReaction._emoji.name;
        var emojiid =  messageReaction._emoji.id;
        var server = messageReaction.message.guild;
        var member = messageReaction.message.guild.members.cache.find(member => member.id === user.id);
    } catch(ReferenceError){return null;}



    if (emojiname === "📩") {
        let createTicket = require("./reactionEvt/crearTicket.js");
        createTicket.run(bot, messageReaction, user)
    } else if (emojiname === "🧻") {
        let cerrarTicket = require("./reactionEvt/cerrarTicket.js");
        cerrarTicket.run(bot, messageReaction, user)
    } else if (emojiname === "🗑") {
        let eliminarTicket = require("./reactionEvt/eliminarTicket.js");
        eliminarTicket.run(bot, messageReaction, user)
    } else if (emojiname === "💵") {
        let pagado = require("./reactionEvt/pagado.js"); 
         pagado.run(bot, messageReaction, user); 
    }

};    