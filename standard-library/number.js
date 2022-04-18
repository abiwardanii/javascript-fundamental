let num = "123"
let converNum = Number(num);
console.log(typeof num);
console.log(typeof converNum);

//static method
console.log(Number.isInteger(converNum));
console.log(Number.isNaN(converNum));

//instance method
let value = Number(123456789);
console.log(value.toString(2));
console.log(value.toLocaleString("id-ID"));
