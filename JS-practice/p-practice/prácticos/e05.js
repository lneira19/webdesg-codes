/*

1. Crea una agenda de contactos que permita almacenar y gestionar contactos en un 
array de objetos, donde cada contacto tenga: 
○ id (número único) 
○ nombre (string) 
○ telefono (string) 
○ email (string) 

2. Implementa las siguientes funciones: 
○ agregarContacto(id, nombre, telefono, email): Añade un nuevo 
contacto. 
○ eliminarContacto(id): Elimina un contacto por su id. 
○ buscarContactoPorNombre(nombre): Busca contactos por nombre 
(puede ser una búsqueda parcial). 
○ actualizarContacto(id, nuevoNombre, nuevoTelefono, 
nuevoEmail): Actualiza la información de un contacto.

3. Crea una función listarContactos() que muestre todos los contactos

*/

// Constructor del objeto Concacto
function Concacto(id,nombre,telefono,email){
    this.id = id
    this.nombre = nombre
    this.telefono = telefono
    this.email = email
}

// Instancias del objeto
const cont1 = new Concacto(1,"Juan",111,"emailcont1")
const cont2 = new Concacto(2,"Pedro",222,"emailcont2")
const cont3 = new Concacto(3,"Celeste",333,"emailcont3")

let contactos = [cont1,cont2,cont3]

/* Funciones */
// 1- Agregar concacto
function agregarConcacto(id,nombre,telefono,email){
    // Corroboro existencia del producto
    let arr_ids = contactos.map((item) => item.id)
    let indice = arr_ids.findIndex((item) => item === id)

    // Si el concacto no existe...
    if (indice === -1){

        // Creo el nuevo objeto
        const nuevo_concacto = new Concacto(id,nombre,telefono,email)
        
        // Push del nuevo objeto
        contactos.push(nuevo_concacto)
        console.log("Contacto agregado exitosamente.")
    }
    else{
        console.log("Contacto existente.")
    }
}
//Demostración
agregarConcacto(4,"Lucas",123,"asd")
console.log(contactos)

// 2- Eliminar un contacto
function eliminarContacto(id){
    // Corroboro existencia del concacto
    let arr_ids = contactos.map((item) => item.id)
    let indice = arr_ids.findIndex((item) => item === id)

    // Si el concacto existe...
    if (indice !== -1){
        console.log("Contacto eliminado exitosamente.")
        contactos.splice(indice,1)
    }
    else{
        console.log("El contacto no existe.")
    }
}
eliminarContacto(4)
console.log(contactos)

// 3- Función de búsqueda de concacto
function buscarContactoPorNombre(nombre){
    // Corroboro existencia del concacto
    let arr_nombres = contactos.map((item) => item.nombre)
    let indice = arr_nombres.findIndex((item) => item.includes(nombre))

    // Si el concacto existe...
    if (indice !== -1){
        console.log("Concacto encontrado")
        console.log(contactos.at(indice))
    }
    else{
        console.log("El contacto no existe.")
    }
}
buscarContactoPorNombre("leste")

// 4- Actualizar concacto
function actualizarContacto(id, nuevoNombre, nuevoTelefono, nuevoEmail){
    // Corroboro existencia del concacto
    let arr_ids = contactos.map((item) => item.id)
    let indice = arr_ids.findIndex((item) => item === id)

    // Si el concacto existe...
    if (indice !== -1){
        let contacto = contactos.at(indice)
        
        contacto.nombre = nuevoNombre
        contacto.telefono = nuevoTelefono
        contacto.email = nuevoEmail

        console.log("Concacto actualizado correctamente.")
    }
    else{
        console.log("El contacto no existe.")
    }
}
actualizarContacto(3,"Violeta",444,"asdasd")
console.log(contactos)