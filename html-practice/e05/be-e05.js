/*
1. Crea un sistema para gestionar libros en una biblioteca, donde cada libro es un 
objeto con las propiedades: 
○ id (número único) 
○ titulo (string) 
○ autor (string) 
○ genero (string) 
○ disponible (booleano)

2. Implementa las siguientes funciones: 
○ agregarLibro(id, titulo, autor, genero): Añade un libro a la 
biblioteca. 
○ eliminarLibro(id): Elimina un libro por su id. 
○ prestarLibro(id): Cambia el estado de disponibilidad de un libro a 
false. 
○ devolverLibro(id): Cambia el estado de disponibilidad de un libro a 
true. 
○ listarLibros(filtro): Lista todos los libros de la biblioteca, permitiendo 
filtrar por género o disponibilidad
*/

// Constructor de objetos
function Libro(id=Number,titulo=String,autor=String,genero=String,disponible=Boolean){
    this.id = id
    this.titulo = titulo
    this.autor = autor
    this.genero = genero
    this.disponible = disponible
}

function Filtro(categoria,especialidad){
    this.categoria = categoria
    this.especialidad = especialidad
}

// Instancio algunos elementos
const libro1 = new Libro(1,"libro1","autor1","genero1",true)
const libro2 = new Libro(2,"libro2","autor2","genero2",false)
const libro3 = new Libro(3,"libro3","autor3","genero3",true)

// VARIABLES BACKEND
let biblioteca = [libro1,libro2,libro3]

// VARIABLES DOCUMENTO
let form_agregar_libro = document.getElementById("form_agregar_libro")
let t_libros = document.getElementById("t_libros")

// FUNCIONES BACKEND
function checkExistencia(id){
    let arr_id = biblioteca.map((item) => item.id)
    let indice = arr_id.findIndex((item) => item === id)

    return indice
}

function agregarLibro(id, titulo, autor, genero){
    if ( (!id) || (!titulo) || (!autor) || (!genero)){
        console.log("Parámetros inválidos.")
        return 1
    }

    let indice = checkExistencia(id)

    if (indice === -1){
        let nuevo_libro = new Libro(id,titulo,autor,genero,true)
        biblioteca.push(nuevo_libro)
        console.log("Libro agregado correctamente.")
        return 0
    }
    else{
        console.log("El libro ya existe.")
        return 0
    }
}

function eliminarLibro(id){
    if ( (!id) ){
        console.log("Parámetros inválidos.")
        return 1
    }
    
    let indice = checkExistencia(id)

    if (indice === -1){
        console.log("El libro no existe.")
        return 0
    }
    else{
        biblioteca.splice(indice,1)
        console.log("El libro fue eliminado correctamente.")
        return 0
    }
}

function prestarLibro(id){
    if ( (!id) ){
        console.log("Parámetros inválidos.")
        return 1
    }
    
    let indice = checkExistencia(id)

    if (indice === -1){
        console.log("El libro no existe.")
        return 0
    }
    else{
        let libro = biblioteca[indice]
        libro.disponible = false
        console.log("El libro fue prestado correctamente.")
        return 0
    }
}

function devolverLibro(id){
    if ( (!id) ){
        console.log("Parámetros inválidos.")
        return 1
    }
    
    let indice = checkExistencia(id)

    if (indice === -1){
        console.log("El libro no existe.")
        return 0
    }
    else{
        let libro = biblioteca[indice]
        libro.disponible = true
        console.log("El libro fue devuelto correctamente.")
        return 0
    }
}

function listarLibros(filtro=Filtro){
    const categoria = filtro.categoria
    const especialidad = filtro.especialidad

    switch(categoria){
        case "genero":    
            let libros_genero = biblioteca.filter((item) => item.genero === especialidad)
            return libros_genero
        case "disponible":
            let libros_disponible = biblioteca.filter((item) => item.disponible === especialidad)
            return libros_disponible
        default:
            return biblioteca
    }
}

// FUNCIONES DOCUMENTO
function actualizarListaLibros(){
    let innertxt_final = "<thead><tr><th>ID</th><th>Título</th><th>Autor</th><th>Género</th>"

    for (let i=0; i<biblioteca.length; i++){
        let objeto = biblioteca.at(i)
        
        arr_keys = []
        for (key in objeto){
            arr_keys.push(key)
        }

        arr_keys.pop()

        let inntxt = arr_keys.reduce(
        (acumulador,valor_actual) => acumulador+"<td>"+biblioteca[i][valor_actual]+"</td>","")
        innertxt_final += "<tr>"+inntxt+"</tr>"
    }
    t_libros.innerHTML = innertxt_final    
}

// MAIN
actualizarListaLibros()

form_agregar_libro.addEventListener("submit",function(event){
    event.preventDefault()

    const id = parseInt(document.getElementById("id").value)
    const titulo = document.getElementById("titulo").value
    const autor = document.getElementById("autor").value
    const genero = document.getElementById("genero").value

    agregarLibro(id,titulo,autor,genero)
    actualizarListaLibros()
})