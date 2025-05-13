/* EXPRESIONES Y OPERADORES */

// Existen tres tripos de operadores
// Operador unario: requiere un operando
// Operador binario: requiere dos operadores
// Operador ternario: operador condicional


// Operadores de asignación
// Asigna el valor del operando de la izquierda al operando de la derecha

let x = 20

x += 20
console.log(x)

x *= 2
console.log(x)

// Operadores de comparación
// Al comparar, los operadores retornan un valor booleano
// Los operadores pueden ser de tipo numérico, string, lógicos o valores de objetos

let var01 = 2
let var02 = '2'

console.log(var01 == var02)
console.log(var01 === var02)

console.log(var01 != var02)
console.log(var01 !== var02)

let var03 = "asd"
let var04 = 'asd'

console.log(var03 == var04)
console.log(var03 === var04)

// Operadores aritméticos
// El operador retorna un valor numérico

let x0 = 123
console.log(x0%4)
console.log(x0**4)

// Operadores bitwise
// Operadores binarios: &, |, ^, ~, <<, >>, <<<, >>>

// Operador de strings
// El operador es +, y concatena strings
let myString = "alpha";
myString += "bet"; // evaluates to "alphabet" and assigns this value to myString.
console.log(myString)
console.log(100+'1')

// Operador ternario
// Único operador que necesita tres operandos
// Utilizado para evaluar condiciones

let value = 18
console.log(value < 18 ? "Menor" : (value > 18 ? "Mayor" : "Igual"))

let resultado = (value) => value < 18 ? "Menor" : (value > 18 ? "Mayor" : "Igual")
console.log(resultado(5))