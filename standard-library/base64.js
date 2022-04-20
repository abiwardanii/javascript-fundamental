const original = "Yohan&Abi=Wardani";

const encoded = Buffer.from(original).toString('base64')
console.log(encoded);

const decoded = Buffer.from(encoded, 'base64').toString();
console.log(decoded);
