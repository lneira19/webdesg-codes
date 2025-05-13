/* 

1. Crea un sistema de gestión de tareas donde se puedan agregar, eliminar y modificar 
tareas.

2. Las tareas se almacenarán en un array de objetos, donde cada objeto representa una 
tarea con los siguientes atributos: 
   - `id` (número único) 
   - `nombre` (string) 
   - `completado` (booleano)

3. Verifica si una tarea existe y si está completa por id. 

4. El sistema debe tener funciones para agregar tareas, marcar tareas 
como completadas, y eliminar tareas por id. 

5. Desarrollar una función para mostrar todas las tareas, y que se pueda
filtrar si están completadas o no. 

*/

// Creación del objeto Tarea
function Tarea(id, nombre, completado) {
  this.id = id;
  this.nombre = nombre;
  this.completado = completado;
}

// Creación de instancias de tarea
const tarea_1 = new Tarea(1,"nombre1",true)
const tarea_2 = new Tarea(2,"nombre2",false)
const tarea_3 = new Tarea(3,"nombre3",false)

// Array de almacenamiento de tareas
const array_tareas = [tarea_1,tarea_2,tarea_3]

// Función para verificar si una tarea existe y si está completada por id
function checkearExistencia(array_tareas,id){
    
    // Se obtienen los ids de las tareas
    let array_ids = array_tareas.map((item) => item.id)

    // Verificación de existencia
    let indice = array_ids.findIndex((item) => item === id)

    if (indice !== -1){
        console.log("Existe.")
    }
    else{
        console.log("No existe")
    }

    return indice
}

checkearExistencia(array_tareas,2)

// Funciones para agregar, eliminar y modificar estado de tareas según id

// 1- Función para agregar tarea
function agregarTarea(nombre_tarea,estado_tarea,array_tareas){
    
    // Se obtienen los ids de las tareas
    let array_ids = array_tareas.map((item) => item.id)
    
    // Sort de menor a mayor
    array_ids.sort()

    // Obtengo el valor máximo
    let max_id = array_ids.at(-1)

    // Creacion de la nueva tarea
    let nueva_tarea = new Tarea(max_id+1,nombre_tarea,estado_tarea)

    // Push de la nueva tarea
    array_tareas.push(nueva_tarea)
}
// Demostración
agregarTarea("nombre4",true,array_tareas)
console.log(array_tareas)

// 2- Función para eliminar tarea según id
function eliminarTarea(id_tarea,array_tareas){

    // Checkeo de existencia del id
    let indice = checkearExistencia(array_tareas,id_tarea)

    // Si existe, elimino la tarea usando splice
    if (indice !== -1){
        array_tareas.splice(indice,1)
    }
}
// Demostración
eliminarTarea(3,array_tareas)
console.log(array_tareas)

// 3- Función para cambiar el estado de una tarea
function cambiarEstadoTarea(id_tarea,estado_tarea,array_tareas){

    // Checkeo de existencia del id
    let indice = checkearExistencia(array_tareas,id_tarea)

    // Si existe, cambio el estado
    if (indice !== -1){
        array_tareas[indice].completado = estado_tarea
    }
}
// Demostración
cambiarEstadoTarea(4,false,array_tareas)
console.log(array_tareas)

// Función para mostrar las tareas con opción de filtro
function mostrarTareas(array_tareas,modo){
    switch (modo){
        case 0:
            console.log(array_tareas)
            break
        case 1:
            let tareas_c = array_tareas.filter(
                (tarea) => tarea.completado === true)
            console.log(tareas_c)
            break
        case 2:
            let tareas_nc = array_tareas.filter(
                (tarea) => tarea.completado === false)
            console.log(tareas_nc)
            break
        default:
            console.log("Ingrese un modo válido.")
    }
}
// Demostración
mostrarTareas(array_tareas,0)