/*
*  (  What does it do?  ) 1. Similar to every and some but it returns a new
* array with the elements that pass the function test.
*  (  Does it edit it?  ) 2. No
*  (What does it return?) 3. A new array with passing elements.
*  (How can we use this?) 4. Given an array of student objects, you could
* filter out who you want for an honors position by their gpa.
*/

let students = [{
    firstName: "Bob",
    lastName: "Bobson",
    gpa: 2.3,
    school: "BYUI",
},
{
    firstName: "Fred",
    lastName: "Fredson",
    gpa: 3.9,
    school: "BYUI",
},
{
    firstName: "Joe",
    lastName: "Joeson",
    gpa: 2.9,
    school: "BYUI",
},
{
    firstName: "Brad",
    lastName: "Bradson",
    gpa: 3.5,
    school: "BYUI",
}
];

let newStudents = students.filter(student => student.gpa > 3.4);

newStudents.forEach(value => console.log(`Congratulations\
 ${value.firstName}! You have been accepted into\
 ${value.school}'s honor society!`));