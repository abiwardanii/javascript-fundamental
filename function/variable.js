function halo(){
    console.log("Hello World");
}
let say = halo;
say();

function sum(a,b){
    console.log(a+b);
}
let result = sum;
result(1,2);