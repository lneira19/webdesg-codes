/*
1. Crear un formulario HTML que permita ingresar nombres de personas. 
2. Al enviar el formulario, el nombre debe agregarse a una lista que se muestra en 
pantalla. 
3. Debe haber un botón para borrar todos los nombres. 
4. No se requiere validación ni edición de nombres.
*/

// Constructor de Objetos
function Persona(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
}

// Instancio algunos objetos Persona
const per1 = new Persona("Juan","Juanez")
const per2 = new Persona("Fernando","Fernandez")
const per3 = new Persona("Gonzalo","Gonzalez") 

// VARIABLES BACKEND
let personas = [per1,per2,per3]

// VARIABLES DOCUMENT
let tab_nombres = document.getElementById("tab_nombres")
let ul_nombres = document.getElementById("ul_nombres")
let form_agregar_persona = document.getElementById("form_agregar_persona")
let btn_borrar_lista = document.getElementById("btn_borrar_lista")

// FUNCIONES BACKEND
function agregarPersona(nombre,apellido){
    if( (!nombre) || (!apellido)){
        console.log("Ingrese parámetros válidos.")
        return 1
    }

    const nueva_persona = new Persona(nombre,apellido)
    personas.push(nueva_persona)
    console.log("Persona agregada correctamente.")
    return 0
}

function limpiarArrayPersonas(){
    personas.length = 0
}

// FUNCIONES DOCUMENT
function actualizarTablaPersonas(){
    tab_nombres.innerHTML = ""

    const headers = ["Nombre","Apellido"]

    // Header
    for (let item of headers){
        const th = document.createElement("th")
        th.textContent = item
        tab_nombres.appendChild(th)
    }

    // Datos
    const keys = ["nombre","apellido"]
    for (let persona of personas){

        const tr = document.createElement("tr")
        tab_nombres.appendChild(tr)

        for (let key of keys){
            const td = document.createElement("td")
            td.textContent = persona[key]
            tab_nombres.appendChild(td)
        }
    }
}

function actualizarListaNombres(){
    ul_nombres.innerHTML = ""

    let nombres = personas.map((item)=>item.nombre)

    for (let nombre of nombres){
        const li = document.createElement("li")
        li.textContent = nombre
        ul_nombres.appendChild(li)
    }
}

// MAIN
actualizarTablaPersonas()
actualizarListaNombres()

form_agregar_persona.addEventListener("submit",function(event){
    event.preventDefault()

    const nombre = document.getElementById("nombre").value.trim()
    const apellido = document.getElementById("apellido").value.trim()

    agregarPersona(nombre,apellido)

    actualizarTablaPersonas()
    actualizarListaNombres()
})

btn_borrar_lista.addEventListener("click",function(event){
    event.preventDefault()

    limpiarArrayPersonas()

    actualizarTablaPersonas()
    actualizarListaNombres()
})