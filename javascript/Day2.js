// Part 1: Variables — var, let, const

var a = 10;
a = 20;
console.log(a);

var number = 30;
var number = 50;
console.log(number);

let value = 100;
value = 200;
console.log(value);

const age = 25;
console.log(age);

// Valid and invalid declarations
var x = 10;
var x = 20;

let y = 10;
y = 20;
// let y = 30; // Invalid: redeclaration

const z = 10;
// z = 20; // Invalid: reassignment
// const z = 30; // Invalid: redeclaration

var name = "Tamilselvan";
let myAge = 25;
const city = "Salem";

console.log(name);
console.log(myAge);
console.log(city);


// Part 2: Printing Statements and Data Types

let userName = prompt("Enter your name");
alert(userName);

let userAge = prompt("Enter your age");
console.log(userAge);

let answer = confirm("Do you know JavaScript?");
console.log(answer);

let stringValue = "Hello JavaScript";
let numberValue = 100;
let booleanValue = true;
let undefinedValue;

console.log(stringValue, typeof stringValue);
console.log(numberValue, typeof numberValue);
console.log(booleanValue, typeof booleanValue);
console.log(undefinedValue, typeof undefinedValue);

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

let items = {
    fruits: ["Apple", "Mango", "Orange"],
    electronics: ["Laptop", "Mobile", "Tablet"],
    vegetable: "Carrot"
};

console.log(items.fruits);
console.log(items.electronics);
console.log(items.vegetable);


// Part 3: Arithmetic Operators

let num1 = 15;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(27 % 5);

console.log(3 ** 4);

let preIncrement = 10;
console.log(++preIncrement);

let preDecrement = 10;
console.log(--preDecrement);

let x1 = 5;
let y1 = x1++;

console.log(x1);
console.log(y1);


// Part 4: Pre/Post Increment and Decrement

let a1 = 4;
console.log(a1++);
console.log(a1);

let a2 = 4;
console.log(++a2);
console.log(a2);

let a3 = 8;
let b3 = a3++;

console.log(a3);
console.log(b3);

let a4 = 8;
let b4 = ++a4;

console.log(a4);
console.log(b4);

let a5 = 6;
let b5 = a5--;

console.log(a5);
console.log(b5);

let a6 = 6;
let b6 = --a6;

console.log(a6);
console.log(b6);

let a7 = 2;
a7++;
a7++;

console.log(a7);

let a8 = 10;
--a8;
--a8;

console.log(a8);

let b9 = 3;
b9 = b9++;

console.log(b9);

let c10 = 4;
let d10 = c10++;

console.log("c:", c10);
console.log("d:", d10);

let e11 = 5;
let f11 = --e11;

console.log("e:", e11);
console.log("f:", f11);

let a12 = 5;
let b12 = a12++;
let c12 = ++a12;

console.log(a12);
console.log(b12);
console.log(c12);