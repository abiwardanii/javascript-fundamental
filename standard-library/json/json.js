const person = {
    firstName: "abi",
    lastName: "wardani",
    address: {
        country :"indo",
        city: "malang"
    }
};

const json = JSON.stringify(person);

const personParser = JSON.parse(json);

console.log(json);
console.log(personParser);