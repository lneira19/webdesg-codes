/*
1. Crear una lista de compras que permita: 
○ Agregar ítems a la lista 
○ Eliminar ítems de la lista 

2. Cada ítem debe tener: 
○ nombre (string) 
○ cantidad (número) 

3. Mostrar la lista en HTML. 

4. La información puede almacenarse en un array. 
*/

// Constructor de objetos
function Item(nombre,cantidad){
    this.nombre = nombre
    this.cantidad = cantidad
}

// Instancio algunos objetos
const item1 = new Item("item1",12)
const item2 = new Item("item2",78)
const item3 = new Item("item3",45)

// VARIABLES BACKEND
let carrito = [item1,item2,item3]

// VARIABLES DOCUMENT
let tab_carrito = document.getElementById("tab_carrito")
let form_addItem = document.getElementById("form_addItem")
let form_delItem = document.getElementById("form_delItem")

// FUNCIONES BACKEND
function agregarItem(nombre,cantidad){
    if ( (!nombre) || (!cantidad)){
        console.log("Parámetros inválidos")
        return 1
    }

    cantidad = Number(cantidad)

    let indice = carrito.findIndex((item) => item.nombre === nombre)

    if (indice === -1){
        let nuevo_item = new Item(nombre,cantidad)
        carrito.push(nuevo_item)
        console.log("Item agregado con éxito.")
    }
    else{
        let item = carrito.at(indice)
        item.cantidad += cantidad
        console.log("Item actualizado con éxito.")
    }

    return 0
}

function eliminarItem(nombre){
    if ( (!nombre) ){
        console.log("Parámetros inválidos")
        return 1
    }

    let indice = carrito.findIndex((item) => item.nombre === nombre)

    if (indice === -1){
        console.log("El item no existe.")
    }
    else{
        carrito.splice(indice,1)
        console.log("El item fue elimiminado correctamente.")
    }

    return 0
}

// FUNCIONES DOCUMENT
function actualizarTablaCarrito(){
    tab_carrito.innerHTML = ""

    let headers = ["Item","Cantidad"]

    for (let elemento of headers){
        const th = document.createElement("th")
        th.textContent = elemento
        tab_carrito.appendChild(th)
    }

    for (let item of carrito){
        
        tab_carrito.appendChild(document.createElement("tr"))

        for (key in item){
            const td = document.createElement("td")
            td.textContent = item[key]
            tab_carrito.appendChild(td)
        }
    }
}

// APP
actualizarTablaCarrito()

form_addItem.addEventListener("submit",function(event){
    event.preventDefault()

    // Recupero los valores
    const nombre = document.getElementById("nombre").value.trim()
    const cantidad = document.getElementById("cantidad").value.trim()

    agregarItem(nombre,cantidad)
    actualizarTablaCarrito()
})

form_delItem.addEventListener("submit",function(event){
    event.preventDefault()

    // Recupero los valores
    const nombre = document.getElementById("nombre_delete").value.trim()

    eliminarItem(nombre)
    actualizarTablaCarrito()
})