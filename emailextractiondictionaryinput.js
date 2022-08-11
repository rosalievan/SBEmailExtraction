const fs = require('fs')

input = fs.readFileSync("test.txt", 'utf8')

let emailDictionary = {}
let domains = []
let usedDomains = []

let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gim;
let email_addresses = input.match(pattern)

for (key in email_addresses){
    domains.push(email_addresses[key].split('@')[1])
}

console.log(domains.length)
for (item in domains){
    let domain = domains[item]
    if (usedDomains.includes(domain)){
        emailDictionary[domain] += 1
    } else {
        emailDictionary[domain] = 1
        usedDomains.push(domain)
    }
}

console.log(emailDictionary)


// printing top 10 in order
var items = Object.keys(emailDictionary).map(function(key) {
    return [key, emailDictionary[key]];
  });
  
items.sort(function(first, second) {
return second[1] - first[1];
});

top10 = items.slice(0, 10);
for (item in top10){
    console.log(top10[item][0])
}