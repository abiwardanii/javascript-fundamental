// Import class Hewan dibawah baris ini
import Hewan from "./hewan";

class Rabbit extends Hewan {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya adalah seekor ${this.breed}`);
    console.log(`Saya berusia ${this.age} tahun`);
    const humanAge = this.getHumanAge();
    console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  }

  getHumanAge() {
    return this.age * 3;
  }
}
// Export class Rabbit dibawah baris ini
export default Rabbit;
