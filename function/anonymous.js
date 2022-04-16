//variable
let say = function(name){
    console.log(`Hello ${name}`);
}  
say("abi");

//Parameter
function Halo(callback){
    callback("iba");
}

Halo(function (name){
    console.log(`Hello ${name}`);
})