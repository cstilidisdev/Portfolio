class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} makes the "${this.sound}" sound`);
  }
}

const cat = new Animal("Cat", "meow");
cat.makeSound();
console.log(Object.getOwnPropertyNames(cat));
