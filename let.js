//let

// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.

let x = 10;
let x = 20; // error
console.log(x); //output Identifier 'x' has already been declared

let x = 10;
x = 20;
console.log(x); //output 20