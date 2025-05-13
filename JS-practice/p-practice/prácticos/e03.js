/*

1. Implementa un sistema de autenticación simple que almacene usuarios
en un array de objetos. Cada usuario debe tener: 
   - `id` 
   - `nombre` 
   - `password` 
   - `email` 

2. Implementa funciones para: 
   - `registrarUsuario(nombre, email, password)` 
   - `iniciarSesion(email, password)`
 
3. Utiliza operadores lógicos para verificar si un usuario ya existe al registrar y si el email y 
la contraseña coinciden al iniciar sesión.

4. Implementa manejo de `Falsy` y `Truthy` valores para comprobar si las entradas son 
válidas (es decir, que no sean `null`, `undefined`, etc.).

5.Validar la fortaleza del `password` (debe tener al menos 6 caracteres y un número). 

*/

// Constructor del objeto Usuario
function Usuario(id,nombre,password,email){
    this.id = id
    this.nombre = nombre
    this.password = password
    this.email = email
}

// Creación de instancias
const user1 = new Usuario(1,"user1","pass1","email1")
const user2 = new Usuario(2,"user2","pass2","email2")
const user3 = new Usuario(3,"user3","pass3","email3")

let usuarios = [user1,user2,user3]

/* Implementación de funciones */
// 1- Registrar usuario
function registrarUsuario(nombre,email,password){
    
    // Validación de datos (Falsy)
    if ((!nombre) || (!email) || (!password)){
        console.log("Ingrese datos válidos.")
        return
    }

    // Validación de existencia de usuario
    if (existenciaUsuario(nombre)){
        console.log("El usuario ya existe.")
        return
    }
    
    // Validación de password
    let validacion_pass = fortalezaPassword(password)
    switch (validacion_pass){
        case 0:
            break
        case 1:
            console.log("Mínimo 6 letras.")
            return
        case 2:
            console.log("Mínimo 1 número.")    
            return
    }

    // Búsqueda del último id
    let arr_ids = usuarios.map((item) => item.id)
    arr_ids.sort()
    let max_id = arr_ids.at(-1)

    // Creación del nuevo usuario
    let nuevo_usuario = new Usuario(max_id+1,nombre,password,email)

    // Push del nuevo usuario
    usuarios.push(nuevo_usuario)
}
// Demostración
registrarUsuario("Lucas","asd@asd","casaloca1")
console.log(usuarios)

// 2- Inicio de sesión
function iniciarSesion(email, password){
    // Array de emails
    let arr_emails = usuarios.map((item) => item.email)

    // Busco el email
    let indice_email = arr_emails.findIndex((item) => item === email)

    if (indice_email === -1)
    {
        console.log("El email no existe.")
        return
    }

    if (usuarios[indice_email].password !== password)
    {
        console.log("La contraseña no coincide.")
        return
    }

    console.log("Inicio de sesión exitoso.")
}
// Demostración
iniciarSesion("asd@asd","casaloca1")

// Funciones complementarias
function existenciaUsuario(nombre){
    // Obtengo array de nombres
    let arr_nombres = usuarios.map((item) => item.nombre)
    
    // Busco el id del nombre
    let indice_nombre = arr_nombres.findIndex((item) => item === nombre)

    // Determino si existe o no el usuario
    if (indice_nombre !== -1){
        return true
    }
    else{
        return false
    }
}

function fortalezaPassword(password){
    
    let caracteres = []
    for (let ch of password){
        caracteres.push(ch)
    }

    let letras = caracteres.filter((item) => 
        (item >= 'a' && item <= 'z') || (item >= 'A' && item <= 'Z'))

    let numeros = caracteres.filter((item) => (item >= '0' && item <= '9'))
    
    if (letras.length < 6){
        return 1 //Faltan letras
    }
    else if (numeros.length < 1){
        return 2 //Faltas numeros
    }
    else{
        return 0 //Todo bien
    }

}