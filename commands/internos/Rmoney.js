const errores = require("./error/error.js");
/* LIBRRIAS */
const Discord = require("discord.js"); const db = require('megadb'); const {readFileSync} = require("fs");
/*DATA */
const Dinero = new db.crearDB('dinero', 'Contabilidad');

module.exports.run = async (bot, message) => {
    let servidor = message.guild;let datos = readFileSync('./config/config.json');
    let rolesADM = JSON.parse(datos).CInternos.Dinero.RMRoles;

    for(let i = 0;i<rolesADM.length; i++){
        let role = rolesADM[i];
        let hasrole = servidor.members.cache.get(message.author.id)._roles.includes(role);
        if(hasrole)
        {
            Dinero.establecer(`${message.guild.id}.declarado`, 0);
            Dinero.establecer(`${message.guild.id}.trasferido`, 0);
            let embed = new Discord.MessageEmbed()
                .setColor(0x890202)
                .setTitle("Dinero reiniciado")
                .addField("Sin trasferir a cupula","$ "+0)
                .addField("Transferidas a cupula","$ "+0)
            message.channel.send({embed}).catch();
        }
    }

}

module.exports.help = {
    name: "resetmoney"
}