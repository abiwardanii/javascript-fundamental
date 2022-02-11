let numbers = [1, 2, 3, 4, 5];
let filterNumber = numbers.filter((number) => {
    return number % 2 === 0;
  });
console.log(filterNumber);
  
let names = [
    {id: 1, name: "abi", age: 6},
    {id: 2, name: "xian", age: 2},
    {id: 3, name: "tom", age: 100},
    {id: 4, name: "edo", age: 21}
];

let filterName = names.filter((name) => {
    return name.age > 20;
  });
console.log(filterName);