module.exports = (bot, message) => { 

    if(message.type === "PINS_ADD"){message.delete().catch();};
    let contienePrefix = message.content.includes(bot.prefix);

};