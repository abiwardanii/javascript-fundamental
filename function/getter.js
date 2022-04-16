const person = {
    name: "abi",
    age: 23,
    get identity(){
        return `Namaku ${this.name} umur ${this.age}`;
    }
}
person.name = "iba";
console.log(person.identity);