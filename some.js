/*
*  (  What does it do?  ) 1. Same thing as "every" except tests for whether
* one value passes your test.
*  (  Does it edit it?  ) 2. No.
*  (What does it return?) 3. True or false.
*  (How can we use this?) 4. Some performs in a similar way to every, but it
* can be used to test if every item does not follow a certain condition. Some
* social media websites make sure that there is no credit card information
* shared online, the following code could test that. 
*/

//        [ None ----------------- Some ------------------- Every]
// Every  [                                                 Every]
// Some   [      ----------------- Some ------------------- Every]
//!Every  [ None ----------------- Some -------------------      ]
//!Some   [ None                                                 ]

let ccs = [
    '8516-9df451097-8229',
    '5502-6418-72as87108',
    '2507-6461-8620-2',
    '5154-3336-9235-3a303',
    '5764-785661-1474',
    '9821-7753-192732',
    '9518-5-1sf935-4321',
    '8516-941097-8229',
    '5502-6417ddf286-7108',
    '2507-6461-8620-2472', //This is a CC
    '5154-3356-92303',
    '5764-7856-92-1474',
    '9821-7753aa-19270422',
    '9518-5489-19321'
];

function func(value) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value);
}

//Tests if there are NOT some cc numbers, tests that every one is false
console.log(!ccs.some(func));

