/* FUNCIONES */

// Funciones con parámetros que no son objetos

// Los parámetros son pasados por valor (by value)
// Por lo tanto, el valor original de las variables no se modifica
function square(number) {
  return number * number;
}
console.log(square(6));

// Funciones con parámetros que son objetos
// Los objetos sí pueden verse modificados
function changeInfo(obj){
    obj.model = "Toyota"
};

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar);
changeInfo(myCar);
console.log(myCar);

// Funciones con parámetros que son arrays
// Los arrays sí pueden verse modificados
function changeArr(arr){
    arr[0] = "Banana"
}

let arr = [1,2,3,4,5]

console.log(arr);
changeArr(arr);
console.log(arr);

/* FUNCTION EXPRESSIONS */
// Posibilidad de crear funciones anónimas

const cubo = function (numero) {
    return numero * numero * numero
}
console.log(cubo(4))

// Utilidad de Function Expressions cuando una función
// es pasada por argumento a otra

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {return x * x * x}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]


/* FUNCIONES FLECHA (ARROW FUNCTIONS) */
// Funciones completamente anónimas (no tienen nombre)
// let func = (arg1, arg2, ..., argN) => expression;
const che_arr = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const len_che_arr = che_arr.map( (s) => s.length );
console.log(len_che_arr); // [8, 6, 7, 9]

let sum = (a, b) => a + b;
console.log(sum(1,2))

let cuadrado = (a) => a*a;
console.log(cuadrado(23))

let dividir = (a,b) => a/b;
console.log(dividir(1,3))

array_numeros = [1,2,3,4,5]
array_divisiones = array_numeros.map( 
    (elemento) => dividir(elemento,array_numeros.length) 
)
console.log(array_divisiones)

let saludo = () => console.log("Hola!")
saludo()