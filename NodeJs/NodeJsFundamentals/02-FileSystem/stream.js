// we use this in case  we have larger files 
//  so it's good to not grab all of the data at once 


const fs = require("fs");


//! encoding:utf8  is optional object which mean it's gonna encode this as it comes in and it will automatically be in a readable format if we don't do we need to add chunk.toString  in write stream
let readSteam = fs.createReadStream("./files/lorem.txt",{encoding:"utf8"});
let writeStream = fs.createWriteStream("./files/new-lorem.md");// immediately create a new file but doens't grab the data 


// on take an event then call back function because it is event listener 

// readSteam.on( "data",chunk => {
//   writeStream.write(chunk)
// }) 






// is working well when we passing data directly from readable to a writable stream is basically more shorter way to write all of these stuff here 

// rather than using event listerner we can do 
// its accomplish the same thing and piping is more efficient 
readSteam.pipe(writeStream)

//! what the live above say is : take the read stream that we are reading data from and i want you to pipe whatever you read from the read stream into the write stream 