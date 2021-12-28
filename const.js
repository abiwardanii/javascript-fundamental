//const

// Variables defined with const cannot be Redeclared.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.

const PI = 3.1415;
PI = 3.14;      // This will give an error
PI = PI + 1;   // This will also give an error

//constanst array
// You can create a constant array:
const teman = ["abi", "xian", "tom"];

// You can change an element:
teman[0] = "rexy";

// You can add an element:
teman.push("yogi");

// Constant Objects
// You can create a const object:
const hp = {type:"android", model:"vivo", color:"black"};

// You can change a property:
hp.color = "red";

// You can add a property:
hp.owner = "abi";