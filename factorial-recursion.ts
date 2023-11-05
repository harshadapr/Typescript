// factorial-recursion.ts

function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const n = 5;
const result = factorial(n);
console.log(`Factorial of ${n} is ${result}`);
