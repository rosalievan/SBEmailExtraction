const fs = require('fs')

let input = fs.readFileSync("test.txt", 'utf8')

const re = new RegExp('\w@softwire.com\s')

const count = (input.match(re) || []).length;

console.log(count)
console.log(input.match(re))