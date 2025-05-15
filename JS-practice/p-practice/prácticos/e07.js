/*
1. Crea un sistema de notificaciones de eventos donde cada evento es un objeto con 
las propiedades: 
○ id (número único) 
○ titulo (string) 
○ fecha (objeto Date) 
○ descripcion (string) 
○ leido (booleano)

2. Implementa las siguientes funciones: 
○ agregarEvento(id, titulo, fecha, descripcion): Añade un 
evento a la lista de notificaciones. 
○ marcarLeido(id): Marca un evento como leído. 
○ eliminarEvento(id): Elimina un evento por su id. 
○ listarEventos(filtro): Muestra todos los eventos; permite filtrar solo 
eventos leídos o no leídos.
*/

// Constructor de Objetos
function Evento(id,titulo,fecha,descripcion,leido){
    this.id = id
    this.titulo = titulo
    this.fecha = fecha
    this.descripcion = descripcion
    this.leido = leido
}

// Instancio algunos elementos
const evento1 = new Evento(1,"evento1",new Date("2022-03-25"),"descripcion1",true)
const evento2 = new Evento(2,"evento2",new Date("2022-03-23"),"descripcion2",false)
const evento3 = new Evento(3,"evento3",new Date("2022-03-24"),"descripcion3",false)

// VARIABLES BACKEND
let eventos = [evento1,evento2,evento3]

// FUNCIONES BACKEND
function checkearExistencia(id){
    let indice = eventos.findIndex((item) => item.id === id)
    return indice
}

function agregarEvento(id,titulo,fecha,descripcion){
    let indice = checkearExistencia(id)

    if (indice === -1){
        let nuevo_evento = new Evento(
            id,titulo,fecha,descripcion,false
        )
        eventos.push(nuevo_evento)
        console.log("Evento agregado correctamente.")
    }
    else{
        console.log("El evento ya existe.")
    }
}
agregarEvento(4,"evento4",new Date("2025-04-12"),"descripcion4")
console.log(eventos)

function marcarLeido(id){
    let indice = checkearExistencia(id)

    if (indice === -1){
        console.log("El evento no existe.")
    }
    else{
        let evento_obj = eventos.at(indice)
        
        if (evento_obj.leido){
            console.log("El evento ya se encuentra leido.")
        }
        else{
            evento_obj.leido = true
            console.log("Evento actualizado correctamente.")
        }
    }
}
marcarLeido(1)
console.log(eventos)

function eliminarEvento(id){
   let indice = checkearExistencia(id)

    if (indice === -1){
        console.log("El evento no existe.")
    }
    else{
        eventos.splice(indice,1)
        console.log("Evento eliminado correctamente.")
    } 
}
eliminarEvento(4)
console.log(eventos)

function listarEventos(filtro){
    if(filtro){
        let eventos_true = eventos.filter((item) => item.leido === true)
        console.log(eventos_true)
        return eventos_true
    }
    else{
        let eventos_false = eventos.filter((item) => item.leido === false)
        console.log(eventos_false)
        return eventos_false
    }
}
listarEventos(false)