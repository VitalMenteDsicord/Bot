module.exports = (bot, message) => { 

    if(message.type === "PINS_ADD"){message.delete().catch();};
    let contienePrefix = message.content.includes(bot.prefix);

    if(!contienePrefix){return null};let messageArray = message.content.split(" ");let command = messageArray[0].replace(prefix,'').trim();


    let comandoIn = bot.comandosIN.get(command);if(comandoIn){comandoIn.run(bot, message);return null;};

};