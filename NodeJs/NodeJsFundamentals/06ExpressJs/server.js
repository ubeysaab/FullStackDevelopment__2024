const path = require("path");
// import express  
const express = require("express");
// define 'app' cause is typicall using word
const app = express();

const PORT = process.env.PORT || 3000;



// define the first Route  : http method that we wanna route
console.log(__dirname);
app.get('/', (req, res) => {
  // define the root,and what to do with that route
  res.sendFile("./views/index.html", { root: __dirname });//what be send in response
});
















//  listen specific port that we have provided 
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))


