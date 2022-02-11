import Rabbit from "./rabbit";

const rabbit1 = new Rabbit("bunny", 8, "fluffy");
const rabbit2 = new Rabbit("cibo", 9, "fluffy");

// jika export lebih dari 2 gunakan {}
export {rabbit1, rabbit2};