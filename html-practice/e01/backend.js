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

// Constructor del objeto ITEM
function Item(nombre,cantidad){
    this.nombre = nombre
    this.cantidad = cantidad
}

// Creo algunas instancias
const item1 = new Item("item1",4)
const item2 = new Item("item2",2)
const item3 = new Item("item3",5)

const carrito = [item1,item2,item3]

// Funciones
// 1- Agregar items a la lista
function agregarItem(nombre,cantidad){
    if ( (!nombre) || (!cantidad)){
        console.log("Ingrese valores válidos.")
        return 1
    }

    // Busco el item en el carrito
    let indice = carrito.findIndex((item) => item.nombre === nombre)

    // Si el item no existe
    if (indice === -1){
        // Creación del nuevo objeto
        let nobj = new Item(nombre,cantidad)

        // Push del nuevo objeto
        carrito.push(nobj)
        console.log("Item agregado correctamente.")
    }
    else{
        let item = carrito.at(indice)
        item.cantidad += cantidad
        console.log("Item actualizado correctamente.")
    }
    return 0
}
//agregarItem("item4",20)
//console.log(carrito)

// 2- Eliminar items de la lista
function eliminarItem(nombre){
    if ( (!nombre)){
        console.log("Ingrese valores válidos.")
        return 1
    }

    // Busco el item en el carrito
    let indice = carrito.findIndex((item) => item.nombre === nombre)

    // Si el item no existe
    if (indice === -1){
        console.log("El item no existe en el carrito.")
        return 1
    }
    else{
        carrito.splice(indice,1)
        console.log("Item eliminado correctamente.")
        return 0
    }
}
//eliminarItem("item4")
//console.log(carrito)

/* Manejo de elementos del HTML */

// Tabla del carrito de compras
let tcarrito = document.getElementById("tcarrito")
function upd_tcarrito(){
    let inTxt_tcarrito = "<thead><tr><th scope='col'>Nombre</th><th scope='col'>Cantidad</th></tr></thead>"
    for (let i=0; i<carrito.length; i++){
        let objitem = carrito.at(i)
        inTxt_tcarrito += "<tr>"+"<td>"+objitem.nombre+"</td>"+"<td>"+objitem.cantidad+"</td>"+"</tr>"
    }
    tcarrito.innerHTML = inTxt_tcarrito
}
upd_tcarrito()


// Otra forma del carrito...
/*
let lista = document.getElementById("lista_carrito")
let lista_elementos = ""
for (let i=0; i<carrito.length; i++){
    let objitem = carrito.at(i)
    lista_elementos += "<li>"+objitem.nombre+objitem.cantidad+"</li>"
}
lista.innerHTML = lista_elementos
*/


// Formulario
let form = document.getElementById("form")
let form_nombre = form.nombre
let form_cantidad = form.cantidad

// Botón para agregar item
let addItemBtn = document.getElementById("addItemBtn")
addItemBtn.addEventListener("click",
    function (){
       agregarItem(form_nombre.value,Number(form_cantidad.value))
       upd_tcarrito()
       console.log(carrito)
    })

// Botón eliminar item
let delItemBtn = document.getElementById("delItemBtn")
delItemBtn.addEventListener("click",
    function(){
        eliminarItem(form_nombre.value)
        upd_tcarrito()
        console.log(carrito)
    }
)