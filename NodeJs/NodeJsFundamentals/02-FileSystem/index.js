
const fs = require("fs");
// instead of hard coding the path   ./files/starter.txt we should use path 
const path = require("path");



fs.readFile(path.join(__dirname,"files","starter1.txt"), { encoding: "utf8" }, (err, data) => {
  if (!err) {
    console.log(data);
  }
  else {
    // let error =  new Error("some thing get wrong")
    throw err
  }
});
console.log("hello World ! ")

//exit  on uncaught errors
// process that one of this values that node  has available to us  we don't need to import it it's already there
process.on("uncaughtException", (err) => {
  console.log("there is an error : ",err)
  process.exit(1);
 });

// utf8 is by default now and we don't need data in callback because we don't read data 
 fs.writeFile(path.join(__dirname,"files","new.txt"), "hello i'm sara nice to meet you ",(err) => {
  if (!err) {
    console.log("writing complete")

    fs.appendFile(path.join(__dirname,"files","new.txt") ," \n nice to meet you to sara ", (err)=>{
      if(!err){
          console.log("  append is complete ")

          fs.rename(path.join(__dirname,"files","new.txt"),path.join(__dirname,"files","newRenamed.txt"), err => {
            if(!err){
              console.log( "   rename success")
            }
            else {
              throw err
            }
          })
      }
      else {
        throw err
      }
    })


  }
  else {
    // let error =  new Error("some thing get wrong")
    throw err
  }
});// And now that's what we called callback hell




















// !! NOTES IN This section 

// functions we will find in node will be Async 

// 1. if you don't throw an error process not gonna catch it 

