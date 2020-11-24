let extras = require("../functions/functions.js");

module.exports = (bot, event) => {
    let EventName = event.t;
    if(EventName === 'MESSAGE_REACTION_ADD')
    {
        var reactionChannel = bot.channels.cache.get(event.d.channel_id);
        if(reactionChannel.messages.cache.has(event.d.message_id)){return;}
        else{
          reactionChannel.messages.fetch(event.d.message_id)
          .then(msg =>{
            var msgReaction = msg.reactions.cache.get(event.d.emoji.name + ":" + event.d.emoji.id);
            var user = bot.users.cache.get(event.d.users_id);
            bot.emit('messageReactionAdd', msgReaction, user); //Envia el siguiente evento
          }).catch(err => console.log(err));
        };
    };
};