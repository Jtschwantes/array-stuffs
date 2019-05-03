let bd = process.argv[2];
const fs = require('fs');
let buffer = fs.readFileSync('pi2.txt', 'utf8');
let contents = buffer.toString();
let lines = contents.split("\r\n");
console.log(lines);