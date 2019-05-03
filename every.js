/*
*  (  What does it do?  ) 1. Tests whether every value passes a function test.
* The first parameter is the function to test, there is a second parameter that
* is optional that is the value given to "this" keyword when executing the 
* function.
*  (  Does it edit it?  ) 2. No.
*  (What does it return?) 3. True or false.
*  (How can we use this?) 4. Every can check any array if every element follows
* the conditions that you set. For example, if I had an array of hundreds of
* credit cards, I could ensure that they all follow credit card format 
* standards.
*/

//        [ None ----------------- Some ------------------- Every]
// Every  [                                                 Every]
// Some   [      ----------------- Some ------------------- Every]
//!Every  [ None ----------------- Some -------------------      ]
//!Some   [ None                                                 ]


//List of credit cards listed on a site.
let ccs = [
    '8516-9456-1097-8229',
    '5502-6418-7286-7108',
    '2507-6461-8620-2472',
    '5154-3336-9235-3303',
    '5764-7856-9261-1474',
    '9821-7753-1927-0432',
    '9518-5489-1935-4321',
    '8516-9456-1097-8229',
    '5502-6418-7286-7108',
    '2507-6461-8620-2472',
    '5154-3356-9235-3303',
    '5764-7856-9261-1474',
    '9821-7753-1927-0422',
    '9518-5489-1935-4321'
];

//Function with regular expressions to determine validity
function func(value) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value);
}

//This will determine if every card qualifies!
console.log(ccs.every(func));