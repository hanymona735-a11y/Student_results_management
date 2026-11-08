// @ts-check

// Student Results Management System

// 1. Create Student Class

class Student {

    /**
     * @param {number} id
     * @param {string} name
     * @param {number[]} grades
     * @param {number} attendance
     */
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. Calculate Student Average

    /**
     * @returns {number}
     */
    getAverage() {

        if (this.grades.length === 0) {
            return 0;
        }

        const total = this.grades.reduce(
            /**
             * @param {number} sum
             * @param {number} grade
             */
            (sum, grade) => sum + grade,
            0
        );

        return total / this.grades.length;
    }

    // 3. Get Student Grade

    /**
     * @returns {string}
     */
    getGrade() {

        const average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // 4. Check Student Result

    /**
     * @returns {string}
     */
    getResult() {

        const average = this.getAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}


// 5. Create Students Data

/** @type {Student[]} */
const students = [

    new Student(1, "Ahmed", [80, 90, 85], 90),

    new Student(2, "Mona", [40, 45, 48], 80),

    new Student(3, "Sara", [70, 75, 80], 95),

    new Student(4, "Ali", [42, 44, 46], 70)

];


// 6. Display All Students Results

console.log("===== Student Results Report =====");

students.forEach(student => {

    console.log("--------------------------");

    console.log("Student ID:", student.id);

    console.log("Student Name:", student.name);

    console.log("Average:", student.getAverage().toFixed(2));

    console.log("Grade:", student.getGrade());

    console.log("Result:", student.getResult());

});


// 7. Use Map To Display Students Names

console.log("===== Students Names =====");

const studentNames = students.map(student => student.name);

console.log(studentNames);


// 8. Filter Students Who Need Improvement

console.log("===== Students Who Need Improvement =====");

const strugglingStudents = students.filter(student => {

    const average = student.getAverage();

    return average >= 40 && average < 50;

});

strugglingStudents.forEach(student => {

    console.log(
        student.name,
        "Average:",
        student.getAverage().toFixed(2)
    );

});


// 9. Add 5 Bonus Marks Using Map

console.log("===== Results After Bonus Marks =====");

/** @type {{name: string, average: number}[]} */

const bonusResults = strugglingStudents.map(student => {

    return {

        name: student.name,

        average: student.getAverage() + 5

    };

});

bonusResults.forEach(student => {

    console.log("Student:", student.name);

    console.log("New Average:", student.average);

});


// 10. Calculate General Average Using Reduce

console.log("===== General Average =====");

const totalAverage = students.reduce(

    (sum, student) => sum + student.getAverage(),

    0

);

const generalAverage = students.length > 0
    ? totalAverage / students.length
    : 0;

console.log("General Average:", generalAverage.toFixed(2));


// 11. Calculate Bonus Average Using Reduce

console.log("===== Bonus Average =====");

const bonusTotal = bonusResults.reduce(

    (sum, student) => sum + student.average,

    0

);

const bonusAverage = bonusResults.length > 0
    ? bonusTotal / bonusResults.length
    : 0;

console.log("Bonus Average:", bonusAverage.toFixed(2));


// 12. Calculate Students Statistics

console.log("===== Students Statistics =====");

const totalStudents = students.length;

const successfulStudents = students.filter(student => {

    return student.getResult() === "ناجح";

});

const reviewStudents = students.filter(student => {

    return student.getResult() === "يحتاج مراجعة";

});

console.log("Total Students:", totalStudents);

console.log("Successful Students:", successfulStudents.length);

console.log("Students Need Review:", reviewStudents.length);


// 13. Final Report

console.log("===== Final Report =====");

console.log("Student Management System Completed Successfully!");

console.log("All Results Have Been Calculated.");
