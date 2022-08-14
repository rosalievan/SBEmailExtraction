const fs = require('fs')

input = fs.readFileSync("test.txt", 'utf8');

//needs decoupling
function populateEmailDict(input) {
    let emailDictionary = {};
    let domains = [];
    let usedDomains = [];

    let pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gim;
    let email_addresses = input.match(pattern);

    for (let key in email_addresses) {
        domains.push(email_addresses[key].split('@')[1]);
    }

// console.log(Array.isArray(domains))
    for (let item in domains) {
        let domain = domains[item]
        if (usedDomains.includes(domain)) {
            emailDictionary[domain] += 1;
        } else {
            emailDictionary[domain] = 1;
            usedDomains.push(domain);
        }
    }

    return emailDictionary;
}


emailDictionary = populateEmailDict(input);
console.log(emailDictionary);


// printing top 10 in order
function printTop10emails(emailDictionary) {

    let output = [];

    const items = Object.keys(emailDictionary).map(function (key) {
        return [key, emailDictionary[key]];
    });

    items.sort(function (first, second) {
        return second[1] - first[1];
    });

    let top10 = items.slice(0, 10);

    for (let item in top10) {
        output.push(top10[item][0]);
    }

    return output;

}

console.log(printTop10emails(emailDictionary))