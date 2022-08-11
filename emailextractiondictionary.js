const fs = require('fs')

input = fs.readFileSync("test.txt", 'utf8')

let emailDictionary = {}
let domains = []
let usedDomains = []

let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$)/gim;
let email_addresses = input.match(pattern)

for (key in email_addresses){
    domains.push(email_addresses[key].split('@')[1])
}


for (item in domains){
    let domain = domains[item]
    console.log(domain)
    if (domain in usedDomains){
        emailDictionary[domain] += 1
    } else {
        emailDictionary[domain] = 1
        usedDomains.push(emailDictionary[domain])
    }
}


console.log(emailDictionary)
// console.log(email_addresses.match(pattern2))