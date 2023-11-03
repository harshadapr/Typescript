// generics.ts

function identity<T>(arg: T): T {
    return arg;
}

const result1 = identity("Hello, TypeScript!");
const result2 = identity(42);
console.log(result1);
console.log(result2);
