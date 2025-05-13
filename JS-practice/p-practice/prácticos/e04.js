/*

1. Crea un sistema de inventario que gestione una lista de productos.
Cada producto será un objeto con las siguientes propiedades: 
○ id (número único) 
○ nombre (string) 
○ cantidad (número) 
○ precio (número) 

2. Implementa las siguientes funciones: 

○ agregarProducto(id, nombre, cantidad, precio): Añade un nuevo producto al 
inventario. Si el producto ya existe, aumenta su cantidad. 
○ eliminarProducto(id): Elimina un producto del inventario por su id. 
○ actualizarCantidad(id, cantidad): Actualiza la cantidad de un 
producto en el inventario. 
○ consultarProducto(id): Muestra los detalles de un producto por su id. 

3. Crea una función listarInventario() que muestre todos los productos en el 
inventario. 

*/

/* Creación del constructor del objeto carrito */
function Producto(id,nombre,precio,cantidad){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
}

// Creación de instancias de tarea
const prod1 = new Producto(1,"producto1",100,20)
const prod2 = new Producto(2,"producto2",200,40)
const prod3 = new Producto(3,"producto3",300,60)

// Array de productos o carrito
let inventario = [prod1,prod2,prod3]

/* Creación de funciones */
// 1- Función para agregar producto
function agregarProducto(id,nombre,cantidad,precio){
    // Corroboro existencia del producto
    let arr_ids = inventario.map((item) => item.id)
    let indice = arr_ids.findIndex((item) => item === id)

    // Si el producto no existe...
    if (indice === -1){

        // Creo el nuevo objeto
        const nuevo_producto = new Producto(id,nombre,precio,cantidad)
        
        // Push del nuevo objeto
        inventario.push(nuevo_producto)
        console.log("Producto agregado exitosamente.")
    }
    else{
        let producto = inventario.at(indice)
        producto.cantidad += cantidad
        console.log("Producto actualizado exitosamente.")
    }
}
// Demostración
agregarProducto(3,"prod4",10,250)
console.log(inventario)
agregarProducto(4,"prod4",20,150)
console.log(inventario)

// 2- Función para eliminar productos
function eliminarProducto(id){
    // Corroboro existencia del producto
    let arr_ids = inventario.map((item) => item.id)
    let indice = arr_ids.findIndex((item) => item === id)

    // Si el producto existe...
    if (indice !== -1){
        inventario.splice(indice,1)
    }
    else{
        console.log("El producto no existe.")
    }
}
//Demostración
eliminarProducto(4)
console.log(inventario)

// 3- Función para actualizar la cantidad de un producto
function actualizarCantidad(id,cantidad){
    // Corroboro existencia del producto
    let arr_ids = inventario.map((item) => item.id)
    let indice = arr_ids.findIndex((item) => item === id)

    // Si el producto existe...
    if (indice !== -1){
        let producto = inventario.at(indice)
        producto.cantidad = cantidad
    }
    else{
        console.log("El producto no existe.")
    }
}
//Demostración
actualizarCantidad(3,12)
console.log(inventario)

// 4- Función para ver información del producto
function consultarProducto(id){
    // Corroboro existencia del producto
    let arr_ids = inventario.map((item) => item.id)
    let indice = arr_ids.findIndex((item) => item === id)

    // Si el producto existe...
    if (indice !== -1){
        console.log(inventario[indice])
    }
    else{
        console.log("El producto no existe.")
    }
}
//Demostración
consultarProducto(3)

// 5- Función para listar productos
function listarInventario(){
    
    let keys = []
    for (let item in inventario[0]){
        keys.push(item)
    }
    console.log(keys)

    for (let i=0; i<inventario.length; i++){
        
        let producto = inventario.at(i)
        let values = []

        for (let item in producto){
            values.push(producto[item])
        }
        console.log(values)
    }
}
console.log("\n")
listarInventario()