const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

const [firstName, secondName, ...rest] = names;
console.log(firstName);
console.log(secondName);
console.log(rest);
