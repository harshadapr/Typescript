// inheritance.ts

class Animal {
  constructor(private name: string) {}

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name: string, private breed: string) {
    super(name);
  }

  makeSound() {
    console.log(`${this.name} (a ${this.breed} dog) barks`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound();
