/*
Instrucciones: 

1. Crea un sistema de reservación de asientos donde los asientos se representen en 
una matriz de 2D (array de arrays), donde cada asiento tiene: 
○ estado (puede ser "disponible", "reservado", o "ocupado") 

2. Implementa las siguientes funciones: 

○ reservarAsiento(fila, columna): Cambia el estado de un asiento de 
"disponible" a "reservado". 

○ cancelarReservacion(fila, columna): Cambia el estado de un 
asiento de "reservado" a "disponible". 

○ ocuparAsiento(fila, columna): Cambia el estado de un asiento de 
"reservado" a "ocupado". 

○ mostrarAsientos(): Muestra la disposición de los asientos en la consola, 
indicando su estado. 

*/

const fila1 = ["disponible","reservado","ocupado","disponible","reservado"]
const fila2 = ["reservado","disponible","disponible","reservado","reservado"]
const fila3 = ["ocupado","reservado","ocupado","disponible","ocupado"]

const grilla = [fila1,fila2,fila3]

/* Implementación de funciones */
// 1- Reservar asiento
function reservarAsiento(fila,columna){

    if (fila < 0 || fila > grilla.length-1){
        console.log("Ingrese un número de fila válido.")
        return
    }
    if (columna < 0 || columna > grilla[0].length-1){
        console.log("Ingrese un número de columna válido.")
        return
    }

    let asiento = grilla[fila][columna]

    switch (asiento){
        case "disponible":
            grilla[fila][columna] = "reservado"
            break
        case "reservado":
            console.log("El asiento ya se encuentra reservado.")
            break
        case "ocupado":
            console.log("El asiento ya se encuentra ocupado.")
            break
    }
}
reservarAsiento(0,2)
console.log(grilla)

// 2- Cancelar reserva
function cancelarReservacion(fila,columna){

    if (fila < 0 || fila > grilla.length-1){
        console.log("Ingrese un número de fila válido.")
        return
    }
    if (columna < 0 || columna > grilla[0].length-1){
        console.log("Ingrese un número de columna válido.")
        return
    }

    let asiento = grilla[fila][columna]

    switch (asiento){
        case "disponible":
            console.log("El asiento se encuentra disponible.")
            break
        case "reservado":
            grilla[fila][columna] = "disponible"
            break
        case "ocupado":
            console.log("El asiento ya se encuentra ocupado.")
            break
    }
}
cancelarReservacion(0,1)
console.log(grilla)

// 3- Ocupar asiento
function ocuparAsiento(fila,columna){

    if (fila < 0 || fila > grilla.length-1){
        console.log("Ingrese un número de fila válido.")
        return
    }
    if (columna < 0 || columna > grilla[0].length-1){
        console.log("Ingrese un número de columna válido.")
        return
    }

    let asiento = grilla[fila][columna]

    switch (asiento){
        case "disponible":
            console.log("El asiento se encuentra disponible.")
            break
        case "reservado":
            grilla[fila][columna] = "ocupado"
            break
        case "ocupado":
            console.log("El asiento ya se encuentra ocupado.")
            break
    }
}
ocuparAsiento(0,4)
console.log(grilla)

// Mostrar asientos
function mostrarAsientos(){
    console.log(grilla)
}