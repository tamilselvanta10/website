var a = 10;
a = 20;
var a = 30;
console.log(a);

let b = 40;
b = 50;
console.log(b);

const c = 60;
console.log(c);

let myName = "Tamilselvan";
let myAge = 25;
let programmingKnowledge = true;

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(programmingKnowledge, typeof programmingKnowledge);

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

let person = {
    name: "Tamilselvan",
    role: "Full Stack Developer",
    cgpa: 8.5
};

console.log(person.name);
console.log(person.role);
console.log(person.cgpa);

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

alert("Hello, " + userName + "!");
console.log(userName);
console.log(userAge);

let num1 = 20;
let num2 = 6;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

let q7 = 5;

console.log(q7++);
console.log(q7);
console.log(++q7);

let q8a = 10;
let q8b = q8a--;
let q8c = --q8a;

console.log(q8a);
console.log(q8b);
console.log(q8c);

let assignment = 20;

assignment += 5;
console.log(assignment);

assignment -= 3;
console.log(assignment);

assignment *= 2;
console.log(assignment);

assignment /= 4;
console.log(assignment);

assignment %= 4;
console.log(assignment);

console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");

let age = 25;
let hasID = true;

console.log(age >= 18 && hasID);
console.log(age >= 18 || hasID);
console.log(!hasID);

let ternaryAge = Number(prompt("Enter your age:"));

let ageMessage = ternaryAge >= 18
    ? "You are eligible to vote."
    : "You are not eligible to vote.";

console.log(ageMessage);

console.log(typeof ("hello" + 10));
console.log(typeof (10 + true));
console.log(typeof (10 + null));
console.log(typeof ("hello" + undefined));

let inputNumber = Number(prompt("Enter a number:"));

console.log(inputNumber + 10);

console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(true));

let positiveNumber = Number(prompt("Enter a number:"));

if (positiveNumber > 0) {
    console.log("Positive number");
} else {
    console.log("Zero or negative number");
}

let time = Number(prompt("Enter the hour (0 to 23):"));

if (time < 0 || time > 23 || !Number.isInteger(time)) {
    console.log("Invalid time");
} else if (time >= 4 && time < 6) {
    console.log("Early morning");
} else if (time >= 6 && time < 12) {
    console.log("Morning");
} else if (time >= 12 && time < 16) {
    console.log("Afternoon");
} else if (time >= 16 && time < 19) {
    console.log("Evening");
} else {
    console.log("Night");
}

let eligibilityAge = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height in cm:"));
let weight = Number(prompt("Enter your weight in kg:"));

if (eligibilityAge >= 18) {
    if (height >= 150) {
        if (weight >= 45) {
            console.log("Eligible");
        } else {
            console.log("Not eligible: Weight is too low");
        }
    } else {
        console.log("Not eligible: Height is too low");
    }
} else {
    console.log("Not eligible: Age is below 18");
}

let trafficLight = prompt("Enter traffic light color:");

switch (trafficLight.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light color");
}

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

let doCount = 1;

do {
    console.log(doCount);
    doCount++;
} while (doCount <= 10);

for (let character of "JavaScript") {
    console.log(character);
}

let students = ["Priya", "Rahul", "Arun", "Divya", "Kumar"];

for (let studentName of students) {
    console.log(studentName);
}

let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

let firstNumber = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter the second number:"));

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);

if (secondNumber !== 0) {
    console.log(firstNumber % secondNumber);
} else {
    console.log("Cannot divide by zero");
}

let numbers = [5, 12, 8, 20, 15];

for (let number of numbers) {
    if (number > 10) {
        console.log(number);
    }
}

let votingAge = Number(prompt("Enter your age:"));

if (votingAge >= 18) {
    alert("You are eligible to vote.");
} else if (votingAge >= 0) {
    alert("You are not eligible to vote.");
} else {
    alert("Please enter a valid age.");
}

let operation = prompt(
    "Choose an operation: addition, subtraction, multiplication, division"
);

let calculatorNum1 = Number(prompt("Enter the first number:"));
let calculatorNum2 = Number(prompt("Enter the second number:"));

let result;

switch (operation.toLowerCase()) {
    case "addition":
        result = calculatorNum1 + calculatorNum2;
        break;
    case "subtraction":
        result = calculatorNum1 - calculatorNum2;
        break;
    case "multiplication":
        result = calculatorNum1 * calculatorNum2;
        break;
    case "division":
        if (calculatorNum2 !== 0) {
            result = calculatorNum1 / calculatorNum2;
        } else {
            result = "Cannot divide by zero";
        }
        break;
    default:
        result = "Invalid operation";
}

console.log(result);
alert("Calculator Result: " + result);