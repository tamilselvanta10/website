
{
    function welcome() {
        console.log("Welcome to JavaScript");
    }
    welcome();
}

{
    function studentDetails(name, age, cgpa) {
        console.log(name, age, cgpa);
    }
    studentDetails("Tamil", 25, 8.5);
    studentDetails("Arun", 24, 9.0);
}

{
    function calculateFee(fee) {
        return fee;
    }
    let studentFee = calculateFee(200000);
    console.log(studentFee);
}

{
    function discount(percent) {
        let fee = 200000;
        let finalFee = fee - (fee * percent / 100);
        console.log(finalFee);
    }
    discount(10);
}

{
    function studentForm(name, age, disability = "no") {
        console.log(name, age, disability);
    }
    studentForm("Tamil", 25, "yes");
    studentForm("Arun", 24, "no");
    studentForm("Priya", 22);
}

{
    function displayMessage(message) {
        console.log(message);
    }
    displayMessage("Hello JavaScript");
}

{
    const printName = function(name) {
        console.log(name);
    };
    printName("Tamil");
}

{
    const printNumber = number => console.log(number);
    printNumber(100);
}

{
    function checkScope() {
        if (true) {
            var a = 10;
            let b = 20;
            const c = 30;
            console.log(a, b, c);
        }
        console.log(a);
        console.log(typeof b);
        console.log(typeof c);
    }
    checkScope();
}

{
    console.log(value);
    var value = 10;
}

{
    function second() {
        console.log("Second function");
    }

    function first(callback) {
        console.log("First function");
        callback();
    }

    first(second);
}

{
    function add(callback, a, b) {
        console.log(a + b);
        callback(a, b);
    }

    function showNumbers(x, y) {
        console.log(x, y);
    }

    add(showNumbers, 10, 20);
}

{
    const sub = (num1, num2) => {
        console.log(num1 - num2);
    };

    function add(callback, a, b) {
        console.log(a + b);
        callback(a, b);
    }

    add(sub, 20, 5);
}

{
    function multiply(callback, a, b) {
        console.log(a * b);
        callback();
    }

    function completed() {
        console.log("Multiplication completed");
    }

    multiply(completed, 5, 4);
}

{
    function divide(num1, num2) {
        if (num2 === 0) {
            console.log("Cannot divide by zero");
            return;
        }
        console.log(num1 / num2);
    }

    function calculate(callback, a, b) {
        callback(a, b);
    }

    calculate(divide, 20, 4);
}

{
    function greetStudent(callback) {
        callback("Tamil");
    }

    function displayStudent(name) {
        console.log(name);
    }

    greetStudent(displayStudent);
}

{
    function* cashbackGenerator() {
        yield "10% cashback";
        yield "30% cashback";
        yield "Better luck next time";
    }

    const cashback = cashbackGenerator();
    console.log(cashback.next().value);
    console.log(cashback.next().value);
    console.log(cashback.next().value);
}

{
    function* numberGenerator() {
        yield 10;
        yield 20;
        yield 30;
    }

    const numbers = numberGenerator();
    console.log(numbers.next());
    console.log(numbers.next());
    console.log(numbers.next());
}

{
    function* discountGenerator() {
        yield "5% discount";
        yield "10% discount";
        yield "15% discount";
        yield "20% discount";
        yield "No discount available";
    }

    for (const message of discountGenerator()) {
        console.log(message);
    }
}

{
    function* studentGenerator() {
        yield "Tamil";
        yield "Arun";
        yield "Priya";
    }

    for (const name of studentGenerator()) {
        console.log(name);
    }
}

{
    function* fourValues() {
        yield "First";
        yield "Second";
        yield "Third";
        yield "Fourth";
    }

    const generator = fourValues();
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
}

{
    function add(a, b, c) {
        console.log(a + b + c);
    }
    add(5, 10, 15);
}

{
    function curriedAdd(a) {
        return function(b) {
            return function(c) {
                console.log(a + b + c);
            };
        };
    }
    curriedAdd(5)(10)(15);
}

{
    const calculateSum = a => b => c => a + b + c;
    console.log(calculateSum(5)(10)(15));
}

{
    const calculateTotal = price => discount => quantity => {
        const discountedPrice = price - (price * discount / 100);
        return discountedPrice * quantity;
    };

    console.log(calculateTotal(1000)(10)(3));
}

{
    function normalCalculate(a, b, c) {
        return a + b + c;
    }

    const curriedCalculate = a => b => c => a + b + c;

    console.log(normalCalculate(10, 20, 30));
    console.log(curriedCalculate(10)(20)(30));
}

{
    (function(productName, discountPercent) {
        console.log(`Special Sale! ${productName} is available at ${discountPercent}% discount.`);
    })("Laptop", 20);
}

{
    function getNumber() {
        return 100;
    }

    const number = getNumber();
    console.log(number);
}

{
    function getMarks(marks) {
        return marks;
    }

    const studentMarks = getMarks(95);
    console.log(studentMarks);
}

{
    function calculateStudentFee(fee = 200000, callback) {
        const discountAmount = callback(fee);
        return fee - discountAmount;
    }

    function calculateDiscount(fee) {
        return fee * 10 / 100;
    }

    const finalStudentFee = calculateStudentFee(undefined, calculateDiscount);
    console.log(finalStudentFee);
}
