let extras = require("../functions/functions.js");

module.exports = (bot, message) => { 
    let prefix = bot.prefix;
    
    if(message.type === "PINS_ADD"){message.delete().catch();};
    let contienePrefix = message.content.includes(prefix);

    if(!contienePrefix){return null};let messageArray = message.content.split(" ");let command = messageArray[0].replace(prefix,'').trim();
    message.delete().catch();
    let comandoIn = bot.comandosIN.get(command);if(comandoIn){comandoIn.run(bot, message);return null;};
    let comandoINF = bot.comandosINF.get(command);if(comandoINF){comandoINF.run(bot, message);return null;};
  
    if(command === "reloadC"){extras.reloadC(bot);return null;}

};