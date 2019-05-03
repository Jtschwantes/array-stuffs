//Word to decode, might turn this into a command line argument later, idk
let word = "cookbooks";

let chars = word.split("");

// Determine the frequency of each char and put it into a nested array
let nest = chars.reduce(function(accum, curVal) {
    let temp = accum.find(char => char[0] === curVal);
    if(temp !== undefined) {
        let index = accum.indexOf(temp);
        accum[index][1]++;
    } else {
        accum.push([curVal, 1]);
    }
    return accum;
}, [[chars[0], 0]])

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
    console.log(nest);
    //Send build huffman encoding values
    let str = nest[0][0].split("");
    for(let i = 0; i < str.length; i++) {
        let pair = comp.find(val => val[0] === str[i]);
        let ind = comp.indexOf(pair);
    }
    comp.indexOf()
    //Take the smallest two and merge
    nest[1][0] += nest[0][0];
    nest[1][1] += nest[0][1];

    nest.shift();
}

console.log(nest);
console.log(comp);