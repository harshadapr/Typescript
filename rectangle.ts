// rectangle.ts

function calculateRectangleArea(width: number, height: number): number {
    return width * height;
}

const width = 5;
const height = 10;
const area = calculateRectangleArea(width, height);

console.log(`The area of the rectangle is: ${area}`);
