// web server with node.js no framework will be used here 
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('../05webserver/logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };

// initialize object 
const myEmitter = new Emitter();


// we need to define a port for our web  server  so not only will it have the address of localhost  because it will just be a development server on our  local machine, but  also we need to say what port  it will be on 

const PORT = process.env.PORT || 3500;// if we host it some where it will use the first informations but we'll use 3500 port

// function to handle serving  
const serveFile = async (filePth,content_type,response) => {
  //always should using try and catch in async functions 
  try {
    const rawData = await fsPromises.readFile(filePth,!content_type.includes("image")?"utf-8":"");
    const data = content_type === "application/json"?JSON.parse(rawData):rawData
    response.writeHead(filePth==="404.html"?404:200,{"Content-Type":content_type});
    response.end(content_type==="application/json"?JSON.stringify(data):data)

    
  } catch (error) {
    console.log(error)
    response.statusCode = 500;
    response.end()
  }


}

  // now we need to build a path and serve the files  


  let filePath ;
// ! this will work but this not efficient because we would have a statement for every address came in and actually every file we can try the same thing using switch but again that's not dynamic we need to think about every possible file 
  // if(req.url ==="/" || req.url ==="index.html"){
  //   res.statusCode = 200;
  //   res.setHeader('Contnet-Type',"text/html")
  //   filePath = path.join(__dirname,"views","index.html")
  //   fs.readFile(filePath,'utf-8',(err,data) => {
  //     if(err) console.log(err)
  //     res.end(data)//sending the data 
  //     console.log(data)
  //   })
  // }  




// Instead of looking at files let look at extensions of request URL that we get 


// Create Server 
let server = http.createServer((req,res) => {
  // now our server doesn't serve any thing we're not sending any type of responde yet yy
  console.log(req.url,req.method);

let extension = path.extname(req.url)

let contentType ;// now using switch we 'll put the content type bassed on request url extension 

switch (extension) {
  // we will do that for every type of request.url that we  expect to get or file content type  that we expect to have requested 
  case '.css':
      contentType = 'text/css';
      break;
  case '.js':
      contentType = 'text/javascript';
      break;
  case '.json':
      contentType = 'application/json';
      break;
  case '.jpg':
      contentType = 'image/jpeg';
      break;
  case '.png':
      contentType = 'image/png';
      break;
  case '.txt':
      contentType = 'text/plain';
      break;
  default:
    // may be the url is just / 
      contentType = 'text/html';
}

console.log("extension is : ",extension)

filePath =  contentType === 'text/html' && req.url === '/'
? path.join(__dirname, 'views', 'index.html')
: contentType === 'text/html' && req.url.slice(-1) === '/'
    ? path.join(__dirname, 'views', req.url, 'index.html')
    : contentType === 'text/html'
        ? path.join(__dirname, 'views', req.url)
        : path.join(__dirname, req.url);

// makes .html extension not required in the browser 
if(!extension &&req.url.slice(-1) !== "/") filePath +=".html"


// now if file exist serve it 
if(fs.existsSync(filePath)){
  serveFile(filePath,contentType,res)

  
}else {
  //404 not found or 301 redirect
  // console.log(path.parse(filePath))//parse   returns an object whose properties represent significant elements of the path.
  switch(path.parse(filePath).base)
  {
    case "old-page.html":
      res.writeHead(301,{"location" :"/new-page.html"});
      res.end();
      break;
      case "www-page.html": 
      res.writeHead(301 , {"location":"/"});
      res.end()
      break;
      default: 
      // serve a 404 
      serveFile(path.join(__dirname,"views","404.html"),"text/html",res)
  }
}








})


// to launch the server is need to listen for  a request so at the end of our file 

server.listen(PORT,() => {
  console.log("server is runnig on  port :",PORT)
})