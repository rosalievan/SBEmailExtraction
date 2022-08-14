const fs = require('fs');
var readlineSync = require('readline-sync');

input = fs.readFileSync("test.txt", 'utf8');

let emailDictionary = {};
let domains = [];
let usedDomains = [];
let frequentDomains=[];
let emailAddresses = [];


function setEmailAddresses() {
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

    for (let item in emailDictionary) {
        if (emailDictionary[item] >= number) {
            frequentDomains.push(item);
        }
    }
}


setEmailAddresses();
setDomains();
populateEmailDict();
console.log('**** the dictionary ****');
console.log(emailDictionary);
console.log('****    ---    ****');


let userInput = readlineSync.question('Over how many times the domain to occure? : ');
console.log(userInput);

setFrequentDomains(userInput);
console.log(frequentDomains);




