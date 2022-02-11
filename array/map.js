let numbers = [1, 2, 3, 4, 5];
let multiply = numbers.map((number) => {
    return number * 2;
  });
console.log(multiply);
  
let friends = [
    { firstName: "abi", lastName: "wardani"},
    { firstName: "xian", lastName: "saja"},
    { firstName: "tom", lastName: "wijaya"},
    { firstName: "edo", lastName: "suhartono"}
];

let fullName = friends.map((friend) => {
    return friend.firstName + " " + friend.lastName;
  });
console.log(fullName);