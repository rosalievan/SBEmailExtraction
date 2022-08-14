const fs = require('fs');

input = fs.readFileSync("test.txt", 'utf8');
let emailDictionary = {};
let domains = [];
let usedDomains = [];
let frequentDomains = [];
let emailAddresses = [];
let userInput = 0;
const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    },
);


function setEmailAdresses() {
    let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gim;
    emailAddresses = input.match(pattern);
}

function setDomains() {
    for (let key in emailAddresses) {
        let fullDomain = emailAddresses[key].split('@')[1];
        domains.push(fullDomain.split('.')[0]);
    }
}

function populateEmailDict() {
    for (let item in domains) {
        let domain = domains[item];
        if (usedDomains.includes(domain)) {
            emailDictionary[domain] += 1;
        } else {
            emailDictionary[domain] = 1;
            usedDomains.push(domain);
        }
    }
}

function setFrequentDomains(number) {
    domains = [];
    for (let item in emailDictionary) {
        if (emailDictionary[item] >= number) {
            frequentDomains.push(item);
        }
    }
}


setEmailAdresses();
setDomains();
populateEmailDict();

readline.question(`What number of occurrences per domain ? :`, number => {
    // console.log(frequentDomains(returnEmailDict(input), number));
    userInput = number;
    readline.close();
})

console.log(userInput);
setFrequentDomains(userInput);
console.log(frequentDomains);
// console.log(emailDictionary);
