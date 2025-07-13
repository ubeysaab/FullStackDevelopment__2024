// 2. Callbacks
// Callbacks are functions passed into other functions to run later.

function greet(name, callback) {
  callback();
  console.log(`Hi ${name}`);
}

greet("Alice", () => {
  console.log("Callback executed");
});


console.log("--The Async Situation---")
// IN Async Situation

const fs = require("fs/promises");

async function readFile(){
  const filedata = await fs.readFile("file2.txt", "utf8");
  return filedata
  
}

readFile().then(data =>console.log((data)))