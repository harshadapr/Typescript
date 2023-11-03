// async-example.ts

function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async task completed!");
    }, 1000);
  });
}

async function main() {
  console.log("Starting asynchronous task...");
  const result = await asyncTask();
  console.log(result);
}

main();
