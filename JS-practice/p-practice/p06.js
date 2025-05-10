/* OBJETOS */

// Creación de objetos
const myObj = new Object();

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

console.log(myHonda)

// Creación de objetos con cosntructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car("Eagle", "Talon TSi", 1993);

console.log(myCar)


// Propiedades de objetos
// Accesi a propiedades de objetos
let myOtherCar = {}

// Dot notation
myOtherCar.make = "Ford";
myOtherCar.model = "Mustang";
myOtherCar.year = 1969;

// Bracket notation
myOtherCar["make"] = "Ford";
myOtherCar["model"] = "Mustang";
myOtherCar["year"] = 1969;



// Enumeración de propiedades de objetos
let propiedades = []
for (i in myOtherCar){
    propiedades.push(i)
}
console.log(propiedades)

// Uso del .this
const Manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};
const Intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is Karina
Intern.sayHi(); // Hello, my name is Tyrone
