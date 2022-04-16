//simple
function* createNames(){
    yield "abi";
    yield "bob";
    yield "cindy";
}

const names = createNames();
for (const value of names){
    console.log(value);
}

function* evenNumbers(num){
    for (let i = 1; i <= num; i++){
        if(i % 2 === 0){
            yield i;
        }
    }
}
const angkaGenap = evenNumbers(10);
for (const value of angkaGenap){
    console.log(value);
}