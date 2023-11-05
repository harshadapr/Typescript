// fisher-yates-shuffle.ts

function fisherYatesShuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const originalArray = [1, 2, 3, 4, 5, 6];
const shuffledArray = fisherYatesShuffle(originalArray);
console.log(shuffledArray);
