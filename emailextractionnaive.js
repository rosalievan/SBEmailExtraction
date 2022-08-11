const fs = require('fs')

input = fs.readFileSync("test.txt", 'utf8')

var counter = 0
 
for(var i = 0; i < input.length; i++) {
  if (input.substring(i, i+ 13) == '@softwire.com') { counter = counter + 1 }
}
 
console.log(counter)