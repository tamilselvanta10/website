
console.log("===== STUDENT MANAGEMENT SYSTEM =====");

// 1. STUDENT DATA
let students = [
    {
        id: 101,
        name: "  Jovita Victor John  ",
        course: "JavaScript",
        marks: 85,
        joiningDate: new Date("2026-06-10")
    },
    {
        id: 102,
        name: "Tamilselvan T",
        course: "Python",
        marks: 72,
        joiningDate: new Date("2026-09-15")
    },
    {
        id: 103,
        name: "Padmarekha T",
        course: "JavaScript",
        marks: 92,
        joiningDate: new Date("2026-08-20")
    },
    {
        id: 104,
        name: "Jenita",
        course: "HTML",
        marks: 45,
        joiningDate: new Date("2026-09-05")
    }
];

// 2. DATE GET METHODS
console.log("\n--- CURRENT DATE ---");

let today = new Date();

console.log("Current Date:", today);
console.log("Day:", today.getDate());
console.log("Day of Week:", today.getDay());
console.log("Month:", today.getMonth() + 1);
console.log("Year:", today.getFullYear());
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());
console.log("Formatted Date:", today.toLocaleDateString("en-IN"));

// 3. DATE SET METHODS
console.log("\n--- DATE SET METHODS ---");

let sampleDate = new Date(2026, 9, 26, 10, 30, 45);

sampleDate.setDate(15);
console.log("After setDate(15):", sampleDate);

sampleDate.setMonth(5);
console.log("After setMonth(5):", sampleDate);

sampleDate.setFullYear(2030);
console.log("After setFullYear(2030):", sampleDate);

sampleDate.setHours(10);
sampleDate.setMinutes(30);
sampleDate.setSeconds(45);

console.log("Final Modified Date:", sampleDate);

// 4. DATE MANIPULATION
console.log("\n--- DATE MANIPULATION ---");

let nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);

console.log("After 7 Days:", nextWeek.toLocaleDateString("en-IN"));

let nextMonth = new Date(today);
nextMonth.setMonth(nextMonth.getMonth() + 1);

console.log("After 1 Month:", nextMonth.toLocaleDateString("en-IN"));

// 5. DISPLAY ALL STUDENTS USING forEach()
console.log("\n--- ALL STUDENTS ---");

students.forEach(student => {
    console.log(
        student.id,
        student.name.trim(),
        student.course,
        student.marks,
        student.joiningDate.toLocaleDateString("en-IN")
    );
});

// 6. map() - CONVERT NAMES TO UPPERCASE
console.log("\n--- STUDENT NAMES ---");

let studentNames = students.map(student =>
    student.name.trim().toUpperCase()
);

console.log(studentNames);

// 7. filter() - PASSED STUDENTS
console.log("\n--- PASSED STUDENTS ---");

let passedStudents = students.filter(student =>
    student.marks >= 50
);

console.log(passedStudents);

// 8. find() - SEARCH STUDENT
console.log("\n--- SEARCH STUDENT ---");

let foundStudent = students.find(student =>
    student.id === 103
);

console.log(foundStudent ?? "Student not found");

// 9. reduce() - TOTAL AND AVERAGE
console.log("\n--- MARKS SUMMARY ---");

let totalMarks = students.reduce((total, student) =>
    total + student.marks, 0
);

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", (totalMarks / students.length).toFixed(2));

// 10. sort() - RANK STUDENTS
console.log("\n--- STUDENT RANKING ---");

let rankedStudents = [...students].sort((a, b) =>
    b.marks - a.marks
);

rankedStudents.forEach((student, index) => {
    console.log(
        `${index + 1}. ${student.name.trim()} - ${student.marks}`
    );
});

// 11. some() - CHECK MARKS ABOVE 90
console.log("\n--- SOME METHOD ---");

console.log(
    "Any student scored above 90:",
    students.some(student => student.marks > 90)
);

// 12. every() - CHECK ALL PASSED
console.log("\n--- EVERY METHOD ---");

console.log(
    "All students passed:",
    students.every(student => student.marks >= 50)
);

// 13. FILTER BY COURSE
console.log("\n--- JAVASCRIPT STUDENTS ---");

let jsStudents = students.filter(student =>
    student.course.toLowerCase() === "javascript"
);

console.log(jsStudents);

// 14. DATE - CALCULATE STUDY DURATION
console.log("\n--- STUDY DURATION ---");

let studyDuration = students.map(student => {
    let difference = today - student.joiningDate;

    let days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    return {
        name: student.name.trim(),
        joiningDate: student.joiningDate.toLocaleDateString("en-IN"),
        daysSinceJoining: days
    };
});

console.log(studyDuration);

// 15. DATE - STUDENTS JOINED IN LAST 90 DAYS
console.log("\n--- RECENT JOINERS ---");

let recentJoiners = students.filter(student => {
    let difference = today - student.joiningDate;
    let days = difference / (1000 * 60 * 60 * 24);

    return days >= 0 && days <= 90;
});

console.log(recentJoiners);

// 16. SORT BY JOINING DATE
console.log("\n--- SORT BY JOINING DATE ---");

let dateSortedStudents = [...students].sort((a, b) =>
    a.joiningDate - b.joiningDate
);

dateSortedStudents.forEach(student => {
    console.log(
        student.name.trim(),
        "-",
        student.joiningDate.toLocaleDateString("en-IN")
    );
});

// 17. FINAL SUMMARY
console.log("\n--- FINAL SUMMARY ---");

console.log("Total Students:", students.length);
console.log("Student Names:", studentNames.join(", "));
console.log("Total Marks:", totalMarks);
console.log("Highest Marks:", Math.max(...students.map(s => s.marks)));
console.log("Lowest Marks:", Math.min(...students.map(s => s.marks)));
console.log("Current Timestamp:", today.getTime());

console.log("\n===== PROJECT COMPLETED =====");
