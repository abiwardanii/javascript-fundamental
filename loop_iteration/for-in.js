//object
const person = {
    name: 'John',
    age: 30
};

for (const property in person) {
    console.log(`${property} = ${person[property]}`);
}
//Array
const name = ['John', 'Jane', 'Mary'];
for (const index in name) {
    console.log(`${index} = ${name[index]}`);
}