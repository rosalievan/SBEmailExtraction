const fs = require('fs')

input = fs.readFileSync("test.txt", 'utf8')

function returnEmailDict(input){
let emailDictionary = {}
let domains = []
let usedDomains = []

let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gim;
let email_addresses = input.match(pattern)

for (key in email_addresses){
    domains.push(email_addresses[key].split('@')[1])
}

// console.log(Array.isArray(domains))

for (item in domains){
    let domain = domains[item]
    if (usedDomains.includes(domain)){
        emailDictionary[domain] += 1
    } else {
        emailDictionary[domain] = 1
        usedDomains.push(domain)
    }
}

return emailDictionary
}

function frequentDomains(emailDictionary, number){
    domains = []
    for (item in emailDictionary){
        if (emailDictionary[item] >= number){
            domains.push(item)
        }
        }
    return domains
    }

const readline = require('readline').createInterface(
    {input: process.stdin,
    output: process.stdout,},
    
    );

readline.question(`What number of occurences does the domain require `, number => {
    console.log(frequentDomains(returnEmailDict(input), number));
    readline.close()
})