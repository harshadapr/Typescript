// file-io.ts

import * as fs from "fs";

const content = "Hello, TypeScript File I/O!";
fs.writeFileSync("output.txt", content);
const fileContent = fs.readFileSync("output.txt", "utf-8");
console.log(fileContent);
