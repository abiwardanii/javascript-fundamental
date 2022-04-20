const url1 = "http://link.com/?name=Abi wardani";
console.log(url1);

const encoded1 = encodeURI(url1);
console.log(encoded1);

const decoded1 = decodeURI(encoded1);
console.log(decoded1);
console.log("\n");
const url2 = "http://link.com/?name=Abi&wardani";
console.log(url2);

const encoded2 = encodeURIComponent(url2);
console.log(encoded2);

const decoded2 = decodeURIComponent(encoded2);
console.log(decoded2);