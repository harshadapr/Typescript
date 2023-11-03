// array-operations.ts

const numbers: number[] = [1, 2, 3, 4, 5];

// Map: Double each element
const doubledNumbers = numbers.map((num) => num * 2);

// Filter: Keep even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Reduce: Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(doubledNumbers);
console.log(evenNumbers);
console.log(sum);
