function outer(){
    function inner(){
        console.log("inner");
    }
    inner();
}
outer();
inner(); // error karna hanya bisa diakses didalam inner function