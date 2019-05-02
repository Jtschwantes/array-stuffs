/*
*  (  What does it do?  ) 1. Applies a function to each element in an array
* and returns a new array. Better version of forEach for most things.
*  (  Does it edit it?  ) 2. No.
*  (What does it return?) 3. A new array.
*  (How can we use this?) 4. We can use a map to apply a non-costant curve
* onto test grades
*/

let grades = [25, 27, 35, 41, 42, 46, 48, 47, 49, 52, 55, 64, 68];
// Whew! Hard test!

let newGrades = grades.map(grade => grade + ((2 / 5) * grade + 20));
console.log(newGrades);
