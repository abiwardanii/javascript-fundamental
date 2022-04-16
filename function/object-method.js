const person = {
    name: "abi",
    sayHalo: function (name) {
        console.log(`Hello ${name}`);
    }
}
person.sayHalo("Iba");

//Menambahkan object method
person.sayHai = function (name){
    console.log(`Hai ${name}`);
}
person.sayHai("abi");