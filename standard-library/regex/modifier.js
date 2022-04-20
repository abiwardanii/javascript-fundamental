const name = "abi wardani \n Abi manggala \n Yohanes Abi";
const regex1 = /abi/i;
const regex2 = /yohanes/ig;

const result1 = regex1.exec(name)
console.log(result1);

const result2 = regex2.exec(name)
console.log(result2);

//modifie
/*
i = incase sensitive
g = global
m = multiline
*/