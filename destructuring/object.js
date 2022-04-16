const person = {
    name: "abi",
    age: 23,
    isMarried: false,
    hobby: ["coding", "reading", "gaming"],
    gender: "male"
}

let {name,age,...rest} = person
console.log(name);
console.log(age);
console.log(rest);