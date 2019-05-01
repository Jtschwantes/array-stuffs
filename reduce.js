/*
*  (  What does it do?  ) 1. Reduces the array by applying a function to
* consecutive elements and reducing it to "one thing". The first parameter
* is the function, the second parameter is an optional initial value for the
* accumulater
*  (  Does it edit it?  ) 2. Yes.
*  (What does it return?) 3. A single value or object.
*  (How can we use this?) 4. Reduce seems particularly useful for
* summing an array. We could use this to average a series of grades.
*/

/*    With accumulator - simple average     */
//Grades and number of students
let grades = [60, 65, 70, 80, 85, 90, 90, 90, 95, 95, 100];
let numStudents = grades.length;

let average = grades.reduce((sum, value) => sum += value) / numStudents;

console.log(average);

/*     Without accumulator -                */
let newArr;
let objArr = [{
        firstName: "Bob",
        lastName: "Bobson",
        gpa: 2.3,
        school: "OSU",
        interviewTime: ""
    },
    {
        firstName: "Fred",
        lastName: "Fredson",
        gpa: 3.9,
        school: "UVU",
        interviewTime: "" 
    },
    {
        firstName: "Joe",
        lastName: "Joeson",
        gpa: 2.9,
        school: "Yale",
        interviewTime: ""
    },
    {
        firstName: "Brad",
        lastName: "Bradson",
        gpa: 3.5,
        school: "ISU",
        interviewTime: ""
    }
];

function reducer(person) {
    if(person.gpa > 3.2) {
        newArr.push(value);
    }
}

newArr = objects.reduce(reducer);
