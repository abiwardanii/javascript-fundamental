const person = {
    firstName: "abi",
    LastName: "wardani",
    get identity(){
        return `${this.firstName} ${this.LastName}`;
    },
    set identity(val){
        const arr = val.split(" ");
        this.firstName = arr[0];
        this.LastName = arr[1];
    }   
}   

person.identity = "Iba Wardani";
console.table(person);

person.identity = "tomas wijaya";
console.table(person);
