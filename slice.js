/*
*  (  What does it do?  ) 1. Slice returns a shallow copy of any consecutive
* elements of the array. The first parameter defines the index starting element
* in the new copy, the optional second parameter is the (index+1) of the last
* element. Negative values may be used to index from the end, the "nth from 
* last" element. When given a value that exceeds the bounds of the array, it
* will take the last-most or first-most element.
*  (  Does it edit it?  ) 2. No.
*  (What does it return?) 3. A shallow copy of the array.
*  (How can we use this?) 4. When handling a large amount of data that you
* need to work with, you can splice it to increase efficiency
*/

let superData = [0, 234, 678, 349, 239, 80, 8093, 09384/* ... */];
let data = superData.slice(-4, -2);

//work with data
console.log(data);