/*
*  (  What does it do?  ) 1. Determines whether something is in the array.
* Takes an additional value of which element to begin the search from. Also
* takes negative numbers as a "nth to last" for the value parameter.
*  (  Does it edit it?  ) 2. No.
*  (What does it return?) 3. True or false.
*  (How can we use this?) 4. We can use includes to test a white or black
* list on a website. If we have a list of banned usernames in a file, we 
* could load that into an array and test the username to see if they are
* allowed on the site.
*/

let bannedNames = [
    'asdfasdfsadf',
    'dfhdfghdfgh',
    'fgjhfgjhfgjh',
    'qwerqwer',
    'eryertyerty',
    'tyuituityui',
    'yuioyuioyuio',
    'zxcvzxcv',
    'xvcbxcvb',
    'cvncvbnncv'
]

if(bannedNames.includes('qwerqwer')) {
    console.log('User has been banned');
}
else {
    console.log('yep');
}

