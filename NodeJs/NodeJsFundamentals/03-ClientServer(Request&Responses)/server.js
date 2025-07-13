
// http module is a core Node module
const { log } = require('console');
let httpModule = require('http');

// We can store an instance of the server in a variable just in case we want to use it in the future for something else like WebSocket.
const server = httpModule.createServer((request, response) => {
  // This callback function is gonna run every time a request comes in to our server.

  // Let's assume we request the home page (e.g., www.website.com). It sends a request to the server for the homepage,
  // then this function runs and sends the homepage.

  // Inside this function we get access to two different objects:
  // 1. The request object
  // 2. The response object

  //! The request object:
  // - Comes loaded with information about the request, such as the URL being requested.
  // - So if I go to mywebsite.com/about, I would be able to find that URL from the request object.
  // - It also includes other information like the request type (GET, POST, PUT, etc.).

  //! The response object:
  // - This is the object we use to send a response to the user in the browser.
  // - response.headers gives the browser more information about what kind of response is coming (also used to send cookies).

  console.log('Request made to this URL:', request.url);
  console.log("With these headers:", request.headers);

  // Set response header for content type
  response.setHeader('Content-Type', 'text/html');

  // Send data back to the browser
  response.write("<h1>Hello Endlessly Looping World</h1>");
  
  // Writing our body or head replaces the default one in the browser for us

  // End the response
  response.end();

  // 📝 This is how easy it is to actually send a response, 
  // but you can already see that it's starting to look quite messy 
  // if we want to send more complex HTML.

  // 👉 So this really is a bad way to send HTML back.
  // Instead, we should create our HTML pages separately and then read these files using Node to send them to the client.
});

// To make our server live and listen for requests
server.listen(3000, 'localhost', () => {
  console.log('Listening for requests on port 3000');
});
























































// Old Notes
// // http modules is core node module 

// const { log } = require('console');
// let httpModule = require('http');



// // we can store an instance of the server in variable just in case if we want to use in the future to somethign else like websocket.
// const server = httpModule.createServer((request,response)=>{
//   // this callback funtction is gonna run every time a request comes in to our server 
//   // lets assume we request the home page when we go to www.website.com and it send request for the home page  to this server then this function is gonna run  and sending the home page 

//   // Inside this function we get access to two different object first of all the request object and secondly a response object
  
//   //! now this request object 
//   // - comes loaded full of information about the reuqest such as the url that is being requested. so if i go to mywebsite.com i would be able to find that url from the this request object to see where they're come from. also other information like the request type is a get post push 

//   // - the response object and this is the object that we'll use to send a response to the user in the browser 

//   console.log('request made by this Url : ',request.url)

//   console.log("with These Headers",request.headers)



//   // ! The response object 
// //- is what we use to send response to the browser
// // -res.headers give the browser a little bit more information about what kind of response is coming  (res.headers it can also use to send cookies )

// // - Set Header Content type
// // response.setHeader('Content-Type','text/plain')
// response.setHeader('Content-Type','text/html')

// // -- To Send the data back to the browser
// response.write("<h1>Hello Endlessly looping World</h1>")
// // ? Writing our body or head is gonna replace the default one in the browser for us 
// // -- After we writing to the response we need to end the response 
// response.end()
// // - This is how easy it is to actually send a response but you can already see that is already is looking quit messy if we want to send some HTML back and i know that web pages is gonna consist of more thant two line of text 

// // - So this really is a bad way to send HTML back,So we need to create our HTML pages in a seperate html and then read these files by node and send them  to the client 
// }
// );

// // to make our server live and listen to the reuqests 
// server.listen(3000,'localhost',()=>{
//   console.log('listening for request in port 3000')
// })



// // 
// // 
// // 
// // 
// // 
// // 
// // 
// // 
// // 

// // 
// // 

