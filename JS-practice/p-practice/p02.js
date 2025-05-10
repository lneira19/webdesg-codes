/* ESTRUCTURAS DE CONTROL */

// if-else if-else
let y = 11;
if (y < 10){
    console.log("Menor a 10");
}
else if (y === 10){
    console.log("Igual a 10");
}
else {
    console.log("Mayor a 10");
}

// Falsy values
// Devuelven 'false' en un condición

/*
    false
    undefined
    null
    0
    NaN
    the empty string ("")
*/

if (undefined){
    console.log("Prueba")
}
else{
    console.log("Indefinido") 
}

// Switch
let fruitType = "Mandarina"
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}

/* LOOPS E ITERACIONES */
// for statement

for (let i = 0; i < 10; i++){
    console.log(i+1)
}

// do ... while
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

// While
let x = 0
while (x < 10){
    x++;
    console.log(x);
}

// for ... in
// Itera sobre los nombres de las propiedades
let obj = {e1: 10, e2: 20, e3: 30};
for (let i in obj){
    console.log(i);
}

// for ... of
// Itera sobre los valores de las propiedades
let arr = [10,20,30];
for (let i of arr){
    console.log(i);
}