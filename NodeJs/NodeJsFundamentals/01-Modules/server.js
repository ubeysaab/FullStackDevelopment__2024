/*


How NodeJs differs from Vanilla JS



1. Node run on a server - not in a browser (backend not frontend)
1. The console is the terminal window
1.  global object instead of window object 
 the window object referred to browser where we could  do window.inner-height and different properties like that 
 window object is  the global scope  in the browser so if you type window in the console you will see every single thing that is attached to ghe global scoop
 the global object is much smaller  but it does have some  of the same properties we were used to seeing in the window object 

1.  NodeJs has common core module(package) that vanilla js doesn't has
    these are modules that relate to  Operating system the file system  and other things  that we can do on the server 
   package(module): which is just a file that contain  some code with export statement so it can be use in another file 
   the file can consume the module with import statement 


to import these common core modules(packages) we use 
1. common Js  modules imports instead of ES6 imports 

ES6 : import whatEverName from whatEverFile 
commonJs : uses require statement

1. Nodejs is missing some JS APIs like fetch (but we can always pull in packages  into node )







*/
// console.log("Hello World ")

// console.log(global);//global is the keyword of the global object
{
  /*
 <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 67.54720000177622,
      nodeStart: 1.1931000016629696,
      v8Start: 6.428000001236796,
      bootstrapComplete: 48.790000000968575,
      environment: 25.522600000724196,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1690974095119.069
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]        
  }
} */
}

// Common js importing
// besides the common core modules  we can also  in pull packages that other developers  have created NPM
// const os = require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());



// ! to import our modules here
// const math=require("./math") // we can do it this way 


// console.log(math.add(12,14))
// console.log(` the result is ${math.mul(5,5)}`)

// or like this 
// const {div,add}=require("./math")
// console.log(div(625,5))
// console.log(add(25,2))






console.log("__________**_______________");
// there are a couple of  other values  that we always have  access to in node
console.log("dirname",__dirname);
console.log("File Name",__filename);
console.log("___________**_______________");

const path = require("path"); //common module with common js import

console.log("path dirname", path.dirname(__filename));
console.log("Base Name",path.basename(__filename));
console.log(path.extname(__filename));
// console.log(path.homedir());

console.log(path.parse(__filename))



