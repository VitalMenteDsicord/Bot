const funciones = require("./functions/functions.js"); const errores = require("./error/error.js");
/* LIBRRIAS */
const Discord = require("discord.js"); const db = require('megadb'); const {readFileSync} = require("fs");
/*DATA */
const Dinero = new db.crearDB('dinero', 'Contabilidad');

module.exports.run = async (bot, message) => {
    let prefix = bot.prefix;

    let datos = readFileSync('./config/config.json');
    let rolesADM = JSON.parse(datos).CInternos.Dinero.RMRoles;

    for(let i = 0;i<ListaRolesP.length; i++){
        let role = ListaRolesP[i];
        let hasrole = servidor.members.cache.get(user.id)._roles.includes(role);
        if(hasrole)
        {
            try
            {
                bot.channels.cache.get(canalActual.id).delete();
                TicketChannelA.eliminar(canalActual.id);
            } catch(err){console.log(err)}
        }
    }

}

module.exports.help = {
    name: "resetmoney"
}