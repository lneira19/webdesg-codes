/* DECLARACIÓN Y DEFINICIÓN DE VARIABLES */ 

// Variable global
let my_var = 10;
console.log(my_var);

// Variable local
if (Math.random() > 0.5){
    const x = 5;
    console.log(x);
}

/* TIPOS DE DATOS */
let boolean_var = true
console.log(typeof(boolean_var))

/* CONVERSIÓN DE DATOS */

// Operador '+' y strings
let x = "The answer is " + 42; // "The answer is 42"
let y = 42 + " is the answer"; // "42 is the answer"
let z = "37" + 7; // "377"

console.log(x,y,z)

// Otros operadores
let xx = "37" - 7; // 30
let yy = "37" * 7; // 259
console.log(xx,yy)

// Métodos de conversión de string a tipo numérico
let str01 = "123";
let str02 = "1.23";
let str03 = "1.23";

str01 = parseInt(str01,10);
console.log(str01)

str02 = parseFloat(str02)
console.log(str02)

str03 = Number(str03)
console.log(str03)

/* OBJETOS LITERALES */
const brand = "Mazda";

function giveYear(){
    return 1997
}

const car = {
    model: "RX-7",
    brand: brand,
    year: giveYear(),
    engine: {type: "V8", hp: 250}
};

console.log(car.model);
console.log(car.brand);
console.log(car.year);
console.log(car.engine);