
// Synchronous
// Code runs line by line.

// The next line waits for the previous one to finish.
console.log('hello')
console.log('world')



console.log("---------------------")
// Asynchronous
// Code doesn't wait.

// Useful for operations like file reading, HTTP requests, or database calls
console.log('hello')


setTimeout(() => {
  console.log('damnnn')
}, 1000);


console.log('world')

console.log("---------------------")
