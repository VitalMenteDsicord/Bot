const Discord = require("discord.js");


function dia(InputFecha) 
{
    let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    let FechayHora = new Date(InputFecha);
    
    let Fecha = dias[FechayHora.getDay()]+","+" "+FechayHora.getDate()+" de "+meses[FechayHora.getMonth()]+" de "+FechayHora.getFullYear();

    return Fecha;
};

function hora(InputFecha) 
{
    let FechayHora = new Date(InputFecha);

    if(FechayHora.getMinutes() < 10)
    {
        let Hora = FechayHora.getHours()+":0"+FechayHora.getMinutes()+" (CEST)";
        return Hora;
    } 
    else 
    {
        let Hora = FechayHora.getHours()+":"+FechayHora.getMinutes()+" (CEST)";
        return Hora;
    }
};

function hasrole(message, roles) 
{
    let servidor = message.guild;
    for(let i = 0;i<roles.length; i++){
        let role = roles[i];
        let hasrole = servidor.members.cache.get(message.author.id)._roles.includes(role);
        if(hasrole)
        {
            return true;
        }
    }

    return false;
};





module.exports = {
    dia,
    hora,
    hasrole
}