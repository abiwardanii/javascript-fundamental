function sum(item, ...data){
    let total = 0;
    for (const value of data){
        total += value;
    }
    console.log(`${item} has ${total} items`);
}
sum("sword", 1, 2, 3, 4, 5);
sum("shield",1, 2, 3, 4, 5,6);
sum("books",1, 2, 3, 4);

const arr = [1, 2, 3, 4, 5];
sum("wand", ...arr);
