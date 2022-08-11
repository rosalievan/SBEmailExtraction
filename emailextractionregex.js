const fs = require('fs')

let input = fs.readFileSync("test.txt", 'utf8')

// const re = new RegExp('\\w@softwire.com\\s')
let pattern = /([a-zA-Z0-9._-]+@softwire\.com )/gim;

const count = (input.match(pattern) || []).length;

console.log(input.match(pattern))
console.log(count)