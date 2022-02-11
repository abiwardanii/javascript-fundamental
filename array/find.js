let numbers = [1, 2, 3, 4, 5];
let foundNumber = numbers.find((number) => {
    return number % 1 === 0;
  });
console.log(foundNumber);
  
let names = [
    {id: 1, name: "abi", age: 6},
    {id: 2, name: "xian", age: 2},
    {id: 3, name: "tom", age: 100},
    {id: 4, name: "edo", age: 21}
];

let foundName = names.find((name) => {
    return name.id === 3;
  });
console.log(foundName);