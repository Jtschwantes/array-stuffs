/*
*  (  What does it do?  ) 1. Finds the first value inside an array based on a 
* function that it is given. You can also guve it a thisArg.
*  (  Does it edit it?  ) 2. No
*  (What does it return?) 3. The element that first satasfied the condition
*  (How can we use this?) 4. It was useful for finding an element inside a 
* nested array, but you can use it to find any element with ease because you
* can specify a finding function.
*/

//Word to decode from the command line
let word = process.argv[2];
let chars = word.split("");

// Determine the frequency of each char and put it into a nested array
let nest = chars.reduce(function(accum, curVal) {
    //look for our letter, if it doesn't exist, expand our nested array
    let temp = accum.find(char => char[0] === curVal);
    if(temp !== undefined) {
        let index = accum.indexOf(temp);
        accum[index][1]++;
    } else {
        accum.push([curVal, 1]);
    }
    return accum;
}, [[chars[0], 0]])

/* Find the longest frequency - useful for later
let longest = 0;
for(i = 0; i < nest.length; i++) {
    if(nest[i][1] > longest) {
        longest = Number(nest[i][1]);
    }
}
//We need a key to tell the decoder what letters were used how many times
let keyString = '';
//Create a key with character and frequency
nest.forEach(function (value) {
    for (let i = 0; i < longest / 10; i++) {
        keyString += Number(value[0].charCodeAt(0)).toString(16);
        if (value[1] !== undefined) {
            keyString += Number(value[1].toString().charCodeAt(0)).toString(16);
        } else {
            keyString += '00';
        }
    }
});*/

//create an additional array to hold the code values
let comp = [];
for(let i = 0; i < nest.length; i++) {
    comp.push([nest[i][0], '']);
}

//Now we need to make our tree
while(nest.length > 1) {
    // we need to sort
    nest.sort(function (a, b) {
        if (a[1] > b[1])                       { return 1; }
        else if (a[1] === b[1] && a[0] > b[0]) { return 1; }
        else                                   { return -1; }
    })
    //Send huffman encoding values
    let str = nest[0][0].split("");
    for(let i = 0; i < str.length; i++) {
        let pair = comp.find(val => val[0] === str[i]);
        let ind = comp.indexOf(pair);
        comp[ind][1] = '0' + comp[ind][1];
    }
    str = nest[1][0].split("");
    for(let i = 0; i < str.length; i++) {
        let pair = comp.find(val => val[0] === str[i]);
        let ind = comp.indexOf(pair);
        comp[ind][1] = '1' + comp[ind][1];
    }

    //Take the smallest two and merge
    nest[1][0] += nest[0][0];
    nest[1][1] += nest[0][1];
    nest.shift();

    console.log(comp);
}

// Print the code for the user
let codeString = '';
chars.forEach(function(char){
    let pair = comp.find(val => val[0] === char)
    let ind = comp.indexOf(pair);
    codeString += comp[ind][1];
})

let compRatio = 0;
let bits = 1;
while(bits < comp.length) {
    bits *= 2;
}

bits = bits * nest[0][1];
compRatio = bits / codeString.length;


//Print for the user
console.log(`Code: ${codeString}`);
console.log(`Compression Ratio: ${compRatio.toFixed(2)}`);
//console.log(`Key: ${keyString}`);