// Employee data
const employees = [
    { name: "Jovita Victor John", salary: 100000, joiningDate: "2024-01-15" },
    { name: "Tamilselvan T", salary: 500000, joiningDate: "2023-05-10" },
    { name: "Padmarekha T", salary: 200000, joiningDate: "2025-02-20" },
    { name: "Jenita", salary: 100000, joiningDate: "2024-07-12" },
    { name: "Anuradha", salary: 900000, joiningDate: "2022-11-01" },
    { name: "Thamarai kannan C", salary: 700000, joiningDate: "2023-09-18" }
];

// DATE: Get current date and time
const today = new Date();

document.getElementById("currentDate").textContent =
    today.toLocaleString("en-IN", {
        dateStyle: "full",
        timeStyle: "medium"
    });

// DATE: Extract separate values
console.log("Year:", today.getFullYear());
console.log("Month index:", today.getMonth());
console.log("Date:", today.getDate());
console.log("Weekday:", today.getDay());
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

// ARRAY: reduce() to calculate total annual salaries
const totalSalary = employees.reduce((acc, emp) => {
    return acc + emp.salary;
}, 0);

// ARRAY: filter() to find employees earning at least ₹3 lakh
const eligible = employees.filter(emp => emp.salary >= 300000);

// ARRAY: find() to get the first matching employee
const firstEligible = employees.find(emp => emp.salary >= 300000);

// ARRAY: map() to extract names
const employeeNames = employees.map(emp => emp.name);

// ARRAY: some() and every()
const anyoneHighPaid = employees.some(emp => emp.salary >= 900000);
const everyoneEmployed = employees.every(emp => emp.salary > 0);

// ARRAY: sort() without changing the original array
const sortedEmployees = [...employees].sort(
    (a, b) => a.salary - b.salary
);

// Display summary
document.getElementById("totalEmployees").textContent =
    employees.length;

document.getElementById("totalSalary").textContent =
    totalSalary.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    });

document.getElementById("eligibleEmployees").textContent =
    eligible.length;

// Display employee cards using map()
function displayEmployees(list) {
    document.getElementById("employeeList").innerHTML =
        list.map(emp => `
            <article class="employee">
                <h3>${emp.name}</h3>
                <p>Annual Salary: ${emp.salary.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0
                })}</p>
                <p>Joining Date: ${emp.joiningDate}</p>
            </article>
        `).join("");
}

function showAll() {
    displayEmployees(employees);
}

function showEligible() {
    displayEmployees(eligible);
}

function sortSalary() {
    displayEmployees(sortedEmployees);
}

// DATE: setFullYear()
function changeYear() {
    const year = Number(document.getElementById("yearInput").value);

    if (!Number.isInteger(year) || year < 1 || year > 9999) {
        document.getElementById("updatedDate").textContent =
            "Please enter a valid year.";
        return;
    }

    const updated = new Date(today);
    updated.setFullYear(year);

    document.getElementById("updatedDate").textContent =
        updated.toLocaleString("en-IN", {
            dateStyle: "full",
            timeStyle: "medium"
        });
}

// Display initial employee list
showAll();

// Additional console practice
console.log("Total salary:", totalSalary);
console.log("Eligible employees:", eligible);
console.log("First eligible employee:", firstEligible);
console.log("Employee names:", employeeNames);
console.log("Anyone earning ₹9 lakh or more:", anyoneHighPaid);
console.log("All employees have positive salaries:", everyoneEmployed);
console.log("Employees sorted by salary:", sortedEmployees);