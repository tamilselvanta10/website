let students = [
    {
        id: 101,
        name: "  Pavani Reddy  ",
        course: "JavaScript",
        marks: 85,
        joiningDate: new Date("2026-06-10")
    },
    {
        id: 102,
        name: "Ravi Kumar",
        course: "Python",
        marks: 72,
        joiningDate: new Date("2026-07-15")
    },
    {
        id: 103,
        name: "Sita Devi",
        course: "JavaScript",
        marks: 92,
        joiningDate: new Date("2026-08-20")
    },
    {
        id: 104,
        name: "Arun Kumar",
        course: "HTML",
        marks: 45,
        joiningDate: new Date("2026-09-05")
    }
];

// 2. Date and Time
console.log("\n--- DATE AND TIME ---");

let today = new Date();

console.log("Current Date:", today);//output=Current Date: Mon Oct 26 2026 15:03:17 GMT+0530 (India Standard Time)
console.log("Day:", today.getDate());//output=Day:26
console.log("Month:", today.getMonth());//output=Month:9
console.log("Year:", today.getFullYear());//output=Year:2026
console.log("Hours:", today.getHours());//output=Hours:15
console.log("Minutes:", today.getMinutes());//output=Minutes:8
console.log("Seconds:", today.getSeconds());//output=Seconds:7
console.log("Day of Week:", today.getDay());//output=Day of week:1

 console.log("Formatted Date:",
    today.toLocaleDateString("en-IN"));//output=Formatted Date: 26/10/2026

 console.log("Formatted Time:",
     today.toLocaleTimeString("en-IN"));//output=Formatted Time: 3:09:30 pm

// Date Manipulation
console.log("\n--- DATE MANIPULATION ---");

let sampleDate = new Date("2026-10-26");
sampleDate.setDate(sampleDate.getDate() );
console.log(sampleDate);//output=Mon Oct 26 2026 05:30:00 GMT+0530 (India Standard Time)

sampleDate.setDate(sampleDate.getDate() + 7);
console.log("Date After 7 Days:", sampleDate);//output=Date After 7 Days: Mon Nov 02 2026 05:30:00 GMT+0530 (India Standard Time)

let monthDate = new Date("2026-10-26");
monthDate.setMonth(monthDate.getMonth() + 1);
console.log("Date After One Month:", monthDate);//output=Date After One Month: Thu Nov 26 2026 05:30:00 GMT+0530 (India Standard Time)

let yearDate = new Date("2026-10-26");
yearDate.setFullYear(yearDate.getFullYear() + 1);
console.log("Date After One Year:", yearDate);//output=Date After One Year: Tue Oct 26 2027 05:30:00 GMT+0530 (India Standard Time)

// 3. String Methods

// console.log("\n--- STRING METHODS ---");

let studentName = "  Pavani Reddy  ";
let cleanName = studentName.trim();

console.log("Original Name:", studentName); //output=Original Name:  Pavani Reddy  
console.log("Trim:", cleanName); //output=Trim: Pavani Reddy
console.log("Length:", cleanName.length); //output=Length: 12
console.log("Character:", cleanName.charAt(0));//output=Character: P
console.log("CharacterCode:", cleanName.charCodeAt(0));//output=CharacterCode: 80
console.log("Slice:", cleanName.slice(0, 6)); //output=Slice: Pavani
console.log("Uppercase:", cleanName.toUpperCase()); //output=Uppercase:PAVANI REDDY
console.log("Lowercase:", cleanName.toLowerCase()); //output=Lowercase:pavani reddy
console.log("Includes:", cleanName.includes("Reddy")); //output=Includes:true
console.log("Split:", cleanName.split(" ")); //output=split:(2) ['Pavani', 'Reddy']
console.log("Index Of:", cleanName.indexOf("Reddy")); //OUTPUT=Index Of: 7

console.log("Replace:",cleanName.replace("Pavani", "Kumar")); //output=Replace: Kumar Reddy
console.log("Starts With:", cleanName.startsWith("P")); //output=Starts With: true
console.log("Ends With:", cleanName.endsWith("y"));//output=Ends With: true
console.log("Starts With:", cleanName.startsWith("a")); //output=Starts With: false
console.log("Ends With:", cleanName.endsWith("e"));//output=Ends With: false

//  4. To String Methods
console.log("\n--- TO STRING METHODS ---");
let courseNames = ["HTML", "CSS", "JavaScript", "Python"];
console.log("Join:", courseNames.join(", ")); //output=Join: HTML, CSS, JavaScript, Python
console.log("To String:", courseNames.toString()); //output=To String: HTML,CSS,JavaScript,Python

// 5. forEach()
console.log("\n--- ALL STUDENTS ---");
students.forEach(function(student) {
    console.log(
        student.id,
        student.name.trim(),
        student.course,
        student.marks
    );
});
//output= --- ALL STUDENTS ---
//  101 'Pavani Reddy' 'JavaScript' 85
//  102 'Ravi Kumar' 'Python' 72
//  103 'Sita Devi' 'JavaScript' 92
//  104 'Arun Kumar' 'HTML' 45

// 6. map()
console.log("\n--- STUDENT NAMES ---");

let names = students.map(student =>
    student.name.trim().toUpperCase()
);
console.log(names); //output=(4) ['PAVANI REDDY', 'RAVI KUMAR', 'SITA DEVI', 'ARUN KUMAR']

// 7. filter()
console.log("\n--- PASSED STUDENTS ---");

let passedStudents = students.filter((student) =>{
    return student.marks >= 50
});
console.log(passedStudents);
//output=(3) [{…}, {…}, {…}]
// 0: {id: 101, name: '  Pavani Reddy  ', course: 'JavaScript', marks: 85, joiningDate: Wed Jun 10 2026 05:30:00 GMT+0530 (India Standard Time)}
// 1: {id: 102, name: 'Ravi Kumar', course: 'Python', marks: 72, joiningDate: Wed Jul 15 2026 05:30:00 GMT+0530 (India Standard Time)}
// 2: {id: 103, name: 'Sita Devi', course: 'JavaScript', marks: 92, joiningDate: Thu Aug 20 2026 05:30:00 GMT+0530 (India Standard Time)}
// length: 3

// 8. find()
console.log("\n--- FIND STUDENT ---");

let foundStudent = students.find(student =>
    student.id === 103
);
console.log(foundStudent);
//output={id: 103, name: 'Sita Devi', course: 'JavaScript', marks: 92, joiningDate: Thu Aug 20 2026 05:30:00 GMT+0530 (India Standard Time)}

// 9. reduce()
console.log("\n--- TOTAL AND AVERAGE MARKS ---");

let totalMarks = students.reduce((total, student) =>
    total + student.marks, 0
);
 console.log("Total Marks:", totalMarks);//output=Total Marks: 294
console.log("Average Marks:", totalMarks / students.length);//output=Average Marks: 73.5

// 10. sort()
console.log("\n--- SORT BY MARKS ---");

let sortedStudents = [...students].sort((a, b) =>
    b.marks - a.marks
);
console.log(sortedStudents);
//output=(4) [{…}, {…}, {…}, {…}]
// 0: {id: 103, name: 'Sita Devi', course: 'JavaScript', marks: 92, joiningDate: Thu Aug 20 2026 05:30:00 GMT+0530 (India Standard Time)}
// 1: {id: 101, name: '  Pavani Reddy  ', course: 'JavaScript', marks: 85, joiningDate: Wed Jun 10 2026 05:30:00 GMT+0530 (India Standard Time)}
// 2: {id: 102, name: 'Ravi Kumar', course: 'Python', marks: 72, joiningDate: Wed Jul 15 2026 05:30:00 GMT+0530 (India Standard Time)}
// 3: {id: 104, name: 'Arun Kumar', course: 'HTML', marks: 45, joiningDate: Sat Sep 05 2026 05:30:00 GMT+0530 (India Standard Time)}
// length: 4

// 11. some()
console.log("\n--- SOME METHOD ---");
let someStudent = students.some(student => {
    return student.marks > 90
})
console.log("Any student scored above 90:",someStudent);//output=Any student scored above 90: true

// 12. every()
console.log("\n--- EVERY METHOD ---");

console.log(
    "All students passed:",
    students.every(student => student.marks >= 50)
); //output=All students passed: false


// 13. Search Students by Course
console.log("\n--- JAVASCRIPT STUDENTS ---");
let jsStudents = students.filter(student =>
    student.course.toLowerCase().includes("javascript")
);
console.log(jsStudents); //output=(2) [{…}, {…}]
// 0: {id: 101, name: '  Pavani Reddy  ', course: 'JavaScript', marks: 85, joiningDate: Wed Jun 10 2026 05:30:00 GMT+0530 (India Standard Time)}
// 1: {id: 103, name: 'Sita Devi', course: 'JavaScript', marks: 92, joiningDate: Thu Aug 20 2026 05:30:00 GMT+0530 (India Standard Time)}
// length: 2

// 14. Final summary
console.log("\n--- Final Summary ---");

console.log(
    "Student Names:",
    students.map(student => student.name.trim()).join(", ")
); //output=Student Names: Pavani Reddy, Ravi Kumar, Sita Devi, Arun Kumar

console.log("Total Students:", students.length);//output=Total Students: 4

console.log(
    "Highest Marks:",
    Math.max(...students.map(student => student.marks)));//output=Highest Marks: 92

console.log(
    "Lowest Marks:",
    Math.min(...students.map(student => student.marks)));//output=Lowest Marks: 45