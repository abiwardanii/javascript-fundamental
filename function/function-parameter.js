function halo(name){
    console.log(`Hello ${name}`);
}

const say = halo;

function sayHalo(callback){
    callback("abi"); // halo("abi");
}
sayHalo(halo);
sayHalo(say); //sayHalo(halo)