// type-annotations.ts

interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}

const alice: Person = { name: "Alice", age: 30 };
greet(alice);
