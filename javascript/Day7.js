/*
   PART 1: ARRAY HIGHER-ORDER METHODS
*/

// Task 1: forEach()
{
    const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    numbers.forEach(num => console.log(num));
}

// Task 2: map() - Multiply by 5
{
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.map(num => num * 5);

    console.log("Task 2:", result);
}

// Task 3: filter() - Numbers greater than 20
{
    const numbers = [10, 15, 25, 30, 40, 5];
    const result = numbers.filter(num => num > 20);

    console.log("Task 3:", result);
}

// Employee array for Tasks 4 and 5
const employees = [
    { name: "Arun", salary: 150000 },
    { name: "Tamil", salary: 250000 },
    { name: "Ravi", salary: 350000 },
    { name: "Priya", salary: 200000 },
    { name: "Kumar", salary: 500000 }
];

// Task 4: Employees earning <= ₹300,000
{
    const result = employees.filter(emp => emp.salary <= 300000);

    console.log("Task 4:", result);
}

// Task 5: First employee earning > ₹200,000
{
    const result = employees.find(emp => emp.salary > 200000);

    console.log("Task 5:", result);
}

// Task 6: reduce() - Total of all numbers
{
    const numbers = [10, 20, 30, 40, 50];
    const total = numbers.reduce((sum, num) => sum + num, 0);

    console.log("Task 6: Total =", total);
}

// Task 7: some() - At least one even number
{
    const numbers = [1, 3, 5, 8, 9];
    const result = numbers.some(num => num % 2 === 0);

    console.log("Task 7:", result);
}

// Task 8: every() - All numbers greater than zero
{
    const numbers = [10, 20, 30, 40];
    const result = numbers.every(num => num > 0);

    console.log("Task 8:", result);
}

// Task 9: sort() - Ascending order
{
    const numbers = [50, 10, 40, 20, 30];
    numbers.sort((a, b) => a - b);

    console.log("Task 9:", numbers);
}

// Task 10: sort() - Descending order
{
    const numbers = [50, 10, 40, 20, 30];
    numbers.sort((a, b) => b - a);

    console.log("Task 10:", numbers);
}


/* 
   PART 2: STRING METHODS
*/

// Task 11: charAt()
{
    const str = "javascript";
    console.log("Task 11:", str.charAt(4));
}

// Task 12: charCodeAt()
{
    const str = "javascript";
    console.log("Task 12:", str.charCodeAt(2));
}

// Task 13: trim()
{
    const str = "   Hello JavaScript   ";
    console.log("Task 13:", str.trim());
}

// Task 14: toUpperCase() and toLowerCase()
{
    const str = "JavaScript";

    console.log("Task 14 Uppercase:", str.toUpperCase());
    console.log("Task 14 Lowercase:", str.toLowerCase());
}

// Task 15: includes()
{
    const str = "I am learning JavaScript";

    console.log("Task 15:", str.includes("script"));
}

// Task 16: startsWith() and endsWith()
{
    const str = "JavaScript";

    console.log("Task 16 Starts:", str.startsWith("Java"));
    console.log("Task 16 Ends:", str.endsWith("Script"));
}

// Task 17: replaceAll()
{
    const str = "java is easy, java is powerful";
    const result = str.replaceAll("java", "python");

    console.log("Task 17:", result);
}

// Task 18: split()
{
    const str = "html-css-javascript-react";
    const result = str.split("-");

    console.log("Task 18:", result);
}

// Task 19: join()
{
    const names = ["Arun", "Tamil", "Ravi", "Priya"];
    const result = names.join(", ");

    console.log("Task 19:", result);
}

// Task 20: slice()
{
    const str = "JavaScript Programming";
    const result = str.slice(0, 10);

    console.log("Task 20:", result);
}


/* 
   PART 3: DATE METHODS
 */

// Task 21: Current year, month, date, and day
{
    const today = new Date();

    console.log("Task 21 Year:", today.getFullYear());
    console.log("Task 21 Month:", today.getMonth() + 1);
    console.log("Task 21 Date:", today.getDate());
    console.log("Task 21 Day:", today.getDay());
}

// Task 22: Display current month name
{
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const today = new Date();

    console.log("Task 22:", months[today.getMonth()]);
}

// Task 23: Current hours, minutes, and seconds
{
    const today = new Date();

    console.log("Task 23 Hours:", today.getHours());
    console.log("Task 23 Minutes:", today.getMinutes());
    console.log("Task 23 Seconds:", today.getSeconds());
}

// Task 24: Change year, month, and date
{
    const date = new Date();

    date.setFullYear(2003);
    date.setMonth(0); // January = 0
    date.setDate(30);

    console.log("Task 24:", date);
}


/* 
   PART 4: ASYNCHRONOUS JAVASCRIPT
*/

// Task 25: setTimeout() after 3 seconds
{
    setTimeout(() => {
        console.log("Task 25: Welcome to JavaScript");
    }, 3000);
}

// Tasks 26 and 27: setInterval() and clearInterval()
{
    const intervalId = setInterval(() => {
        console.log("Task 26: Learning JavaScript");
    }, 2000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Task 27: Interval stopped");
    }, 8000);
}

// Task 28: Synchronous code and setTimeout()
{
    function one() {
        console.log("Task 28: One");
    }

    function two() {
        console.log("Task 28: Two");
    }

    function three() {
        console.log("Task 28: Three");
    }

    one();
    setTimeout(two, 0);
    three();

    // Expected order:
    // One
    // Three
    // Two
}


/*
   PART 5: PROMISES AND API FETCHING
 */

// Task 29: Promise resolve
{
    const loginPromise = new Promise((resolve, reject) => {
        resolve("Login successful");
    });

    loginPromise
        .then(result => console.log("Task 29:", result));
}

// Task 30: Promise reject
{
    const loginPromise = new Promise((resolve, reject) => {
        reject("Invalid password");
    });

    loginPromise
        .then(result => console.log(result))
        .catch(error => console.warn("Task 30:", error));
}

// Task 31: Promise finally()
{
    const processPromise = new Promise((resolve, reject) => {
        resolve("Data loaded successfully");
    });

    processPromise
        .then(result => console.log("Task 31:", result))
        .catch(error => console.warn(error))
        .finally(() => console.log("Task 31: Process completed"));
}

// Task 32: Fetch all product titles
{
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                console.log("Task 32:", product.title);
            });
        })
        .catch(error => console.warn("Task 32 Error:", error.message))
        .finally(() => console.log("Task 32: API call completed"));
}

// Task 33: Print title, price, and category
{
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                console.log("Task 33:", {
                    title: product.title,
                    price: product.price,
                    category: product.category
                });
            });
        })
        .catch(error => console.warn("Task 33 Error:", error.message));
}

// Task 34: Handle API errors using console.warn()
{
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(products => console.log("Task 34:", products))
        .catch(error => console.warn("Task 34 Error:", error.message));
}

// Task 35: API fetch with finally()
{
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then(products => console.log("Task 35:", products))
        .catch(error => console.warn("Task 35 Error:", error.message))
        .finally(() => console.log("Task 35: API call completed"));
}


/* 
   PART 6: REAL-TIME MINI TASKS
 */

// Task 36: Employee salary report
{
    const employees = [
        { name: "Arun", salary: 150000 },
        { name: "Tamil", salary: 250000 },
        { name: "Ravi", salary: 350000 },
        { name: "Priya", salary: 180000 },
        { name: "Kumar", salary: 400000 }
    ];

    employees
        .filter(emp => emp.salary < 300000)
        .forEach(emp => {
            console.log("Task 36:", emp.name, "Salary:", emp.salary);
        });
}

// Task 37: Product titles and prices using map()
{
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then(products => {
            const result = products.map(product => ({
                title: product.title,
                price: product.price
            }));

            console.log("Task 37:", result);
        })
        .catch(error => console.warn("Task 37 Error:", error.message))
        .finally(() => console.log("Task 37: API call completed"));
}

// Task 38: Search products by category
{
    const chosenCategory = "jewelery";

    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then(products => {
            const result = products.filter(
                product => product.category === chosenCategory
            );

            console.log("Task 38 Category:", chosenCategory);
            console.log("Task 38 Products:", result);
        })
        .catch(error => console.warn("Task 38 Error:", error.message))
        .finally(() => console.log("Task 38: API call completed"));
}

// Task 39: Number analysis using five methods
{
    const numbers = [5, 10, 15, 20, 25, 30];

    // map(): Square every number
    const squares = numbers.map(num => num * num);
    console.log("Task 39 Squares:", squares);

    // filter(): Get numbers greater than 15
    const filtered = numbers.filter(num => num > 15);
    console.log("Task 39 Greater than 15:", filtered);

    // reduce(): Calculate total
    const total = numbers.reduce((sum, num) => sum + num, 0);
    console.log("Task 39 Total:", total);

    // some(): Check if any number is even
    const hasEven = numbers.some(num => num % 2 === 0);
    console.log("Task 39 Has even number:", hasEven);

    // every(): Check if all numbers are positive
    const allPositive = numbers.every(num => num > 0);
    console.log("Task 39 All positive:", allPositive);
}

// Task 40: Complete product listing with error handling
{
    fetch("https://fakestoreapi.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                console.log("Task 40:", {
                    title: product.title,
                    price: product.price,
                    category: product.category
                });
            });
        })
        .catch(error => {
            console.warn("Task 40 Error:", error.message);
        })
        .finally(() => {
            console.log("Task 40: API call completed");
        });
}