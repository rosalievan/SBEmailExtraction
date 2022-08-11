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