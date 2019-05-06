/*
*  (  What does it do?  ) 1. It joins two arrays like a concat would, but
* returns a string instead. It takes a parameter for how you want your string
* to be separated.
*  (  Does it edit it?  ) 2. No
*  (What does it return?) 3. A new string.
*  (How can we use this?) 4. It could be useful for most language purposes.
* My example is a program that can tell you how many characters into pi a 
* birthday is. I don't want to store over a million bytes on my computer,
* so I can instead join a few characters at once and read those.
*/

let bd = process.argv[2];
let fs = require('fs');
let data = [];
let counter = 0;
let running = true;
console.log(bd);
var readStream = fs.createReadStream("pi2.txt", {
    encoding: 'utf8',
    fd: null,
    highWaterMark: 1000000
});

readStream.on('readable', function () {
    while (running) {
        //Take one more char
        let char = readStream.read(1);
        counter++;

        //If it's at null, we finish the program
        if(char === null) {
            running = false;
        }

        //Ignore new lines and char returns
        if(char != '\n' && char != '\r') {
            data.push(char);
        }

        //Check to see if the birthday matches
        if(data.join('') === bd) {
            console.log(`Your birthday is ${counter} digits into PI! :)`);
            running = false;
        }

        //If not, let's keep going!
        else if (data.length > bd.length) {
            data.shift();
        }
        // console.log(data.join(''));
    }
    console.log(counter);
});


// let buffer = fs.readFileSync('pi2.txt', 'utf8');
// let contents = buffer.toString();
// let lines = contents.split("\r\n");
// console.log(lines);
