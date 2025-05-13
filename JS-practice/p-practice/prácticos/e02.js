/*

1. Crea un carrito de compras utilizando arrays y objetos donde cada
 producto tenga las propiedades: 
   - `id` 
   - `nombre` 
   - `precio` 
   - `cantidad` 

2. Implementa las siguientes funciones: 
   - `agregarProducto(id, cantidad)`: Añade productos al carrito. 
   - `removerProducto(id)`: Elimina productos del carrito. 
   - `totalCarrito()`: Calcula el total de la compra. 
   - `listarProductos()`: Muestra todos los productos del carrito.
 
3.Verificar si el carrito tiene productos y mostrar un mensaje si está vacío. 

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
let carrito = [prod1,prod2,prod3]

/* Implementación de funciones */
// 1- Agregar productos al carrito
function agregarProducto(id,nombre,precio,cantidad){
    // Creación del nuevo objeto Producto
    const nuevo_producto = new Producto(
        id,nombre,precio,cantidad)
    
    carrito.push(nuevo_producto)
}
// Demostración
agregarProducto(4,"producto4",400,123)
console.log(carrito)

// 2- Remover un producto a partir del id
function removerProducto(id){
    // Checkeo de la existencia del producto
    let arr_ids = carrito.map((item) => item.id)
    let indice = arr_ids.findIndex((item) => item === id)

    if (indice !== -1){
        // Si existe el producto, entonces remuevo
        carrito.splice(indice,1)
    }
    else{
        console.log("No existe producto con id "+id)
    }
}
// Demostración
removerProducto(4)
console.log(carrito)

// 3- Total de la compra
function totalCarrito(){
    let arr_total_por_producto = carrito.map(
        (item) => item.precio * item.cantidad)

    let total = arr_total_por_producto.reduce(
        (acumulador,valor_actual) => acumulador + valor_actual, 0)

    return total
}
// Demostración
let total = totalCarrito()
console.log("Total: $"+total)

// 4- Mostrar productos del carrito
function listarProductos(){
    console.log(carrito)
}

/* Verificación de que el carrito esté o no vacío */
function estadoCarrito(){
    let len = carrito.length

    if (len){
        console.log("El carrito tiene productos.")
    }
    else
    {
        console.log("El carrito está vacío.")
    }
}
// Demostración
estadoCarrito()
carrito.length = 0
estadoCarrito()
