//Array
const names = ['abi','xian','tomi'];
const [firstName,secondName,thirdName, fourthName = "paul"] = names;
console.log(firstName);
console.log(secondName);
console.log(thirdName);
console.log(fourthName);

//Object
const person = {
    name: "abi",
    age: 23
}

const {name,age,hobi = "coding"} = person;
console.log(name);
console.log(age);
console.log(hobi);