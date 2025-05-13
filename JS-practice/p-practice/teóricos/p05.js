/* ARRAYS */

// Creación de arrays
// Todas estas formas crean el mismo array
const arr1 = new Array(1,2,3);
const arr2 = Array(1,2,3);
const arr3 = [1,2,3];

console.log(arr1,arr2,arr3)

// Longitud de arrays
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31

// Modificación del array utilizando .length
const dogs = ["Dusty", "Misty", "Twiggy"];
console.log(dogs.length); // 3

dogs.length = 2;
console.log(dogs); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

dogs.length = 0;
console.log(dogs); // []; the cats array is empty

dogs.length = 3;
console.log(dogs); // [ <3 empty items> ]

// Iteración sobre arrays
const arr = [123,234,345]
for (item of arr){
    console.log(item)
}
arr.forEach((item) => console.log(item))

// Métodos de array

// .concat
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
console.log(myArray)

// .join
myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list is "Wind - Rain - Fire"
console.log(list)

// .push
myArray = ["1", "2"];
myArray.push("3"); // myArray is now ["1", "2", "3"]
console.log(myArray)

// .pop
myArray = ["1", "2", "3"];
const last = myArray.pop();
console.log(myArray)

// .shift
myArray = ["1", "2", "3"];
const first = myArray.shift();
console.log(myArray) // ["2", "3"]

// .unshift
myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
console.log(myArray) // ["4", "5", "1", "2", "3"]

// .slice
myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
console.log(myArray)

// .at
myArray = ["a", "b", "c", "d", "e"];
let elemento = myArray.at(-2); // "d", the second-last element of myArray
console.log(elemento)

// .reverse
myArray = ["1", "2", "3"];
myArray.reverse();
console.log(myArray)

// .forEach
const a = ["a", "b", "c"];
a.forEach((element) => {
  console.log(element);
});

// .map
let a1 = ["a", "b", "c"];
let a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C'

// .find
let a3 = ["a", 10, "b", 20, "c", 30];
let i = a3.find((item) => typeof item === "number");
console.log(i); // 10

// .findLast
a1 = ["a", 10, "b", 20, "c", 30];
i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30

// .findIndex
a1 = ["a", 10, "b", 20, "c", 30];
i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1

// .every
function isNumber(value) {
  return typeof value === "number";
}
a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false

// .some
function isNumber(value) {
  return typeof value === "number";
}
a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // true
a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // true
a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // false

// .reduce
let array = [10, 20, 30];
const total = array.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1,
);
console.log(total); // 6000

const total_2 = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total_2); // 60