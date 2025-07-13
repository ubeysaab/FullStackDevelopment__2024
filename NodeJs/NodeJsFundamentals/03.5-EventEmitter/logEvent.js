//  how to emit custome events and how to respone this event when it is emitted

//  we will turn this to module that we will export into index.js 
const {format} = require("date-fns");
const {v4:uuid} = require("uuid");

// common core modules
const fsPromiss = require("fs").promises;
const path= require("path");
const fs = require("fs")

// const dateTimee = format(new Date(),"yyyy\\MM\\dd\tHH:mm:ss");

// console.log( typeof dateTimee)

const logEventsFunction = async (msg) => {
  const dateTime = format(new Date(),"yyyy\\MM\\dd\|HH:mm:ss");
  const fullDateId = `${dateTime} \t ${uuid()} ${msg}`;
  // console.log(fullDateId)
  try {
      if(!fs.existsSync(path.join(__dirname,"logs"))){
        await fsPromiss.mkdir(path.join(__dirname,"logs"))
      }
      // use append because append gonna add the file if doesn't exist  but it doesn't make directory so we need to use mkdir
      await fsPromiss.appendFile(path.join(__dirname,"logs","eventLoging.txt"),fullDateId)
      console.log(fullDateId)
  } catch (error) {
    console.log(error)
  }
}
// export  default = logEventsFunction  [x]
module.exports = logEventsFunction