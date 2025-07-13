//  we can install node package globally use npm intall nodemon -g
// Nodemon : is monitor our files an as we save  it automitacally restarts the server so we don't need always to typing node and the fileName (its look for index.js by default) Global install (with -g): puts stuff in /usr/local or wherever node is installed

// npm init to initialize package.json

// package.json is important because this is what npm  reads  to know what packages to install for our project  because this file will stay with our repo  if we send it to github but we won't send the packages itself and that way we don't have to transfer much data  or stores much data and then when somebody else clone this app  is just can read the pakcage.json or likewise  if  we were host it and build the application at a host and run a build command then  it would install  those packages there without having to transfer them over from github

// what we see inside dependencies inside package.json these are Production dependencies we see listed  here so when project build with build command it would include  this package  because we would know it would be part of the  overall application that needed to go into production

// package-lock.json :is handled by npm don't wanna   change anything there

// node modules can be fairly large fairly fast because there is gonna be lot of files and folders here and that because any dependency that  we add can pull in other dependencies  and that why we don't need to store that on our github so what we should do is  always adding .gitignore file and inside of it the first thing we should add  is node_modules now if we init git and push this to github the node_modules folder  would not be included  and that's important  and that important because there is alot of data in node_modules

//  and if  you were to clone  another repo and it had the package.json   but didn't had the node_modules you would get error  if you tried to run the project so the first thing we need to do is run "npm install" and it's gonna read package json  and go ahead and install  node modules you need

const { format } = require("date-fns");
console.log(format(new Date(), "yyyy\\MM\\dd\tHH:mm:ss"));

// DEV DEPENDENCIES
// to install dev dependencies  we use npm intall packageName --save-dev or -D

// Scripts and how to run our application using scripts ?? because that what a server  would use if we were to host this some where  add script key:value inside package.json  ex[ "start": "node index.js"] and then  run npm run start inside the CLI

// now ES6 imports and common js imports

//  with es6 import we would say  import uuid as someThing

// here we will import a specific version  which is v4 as uuid using common js modules

const { v4: uuid } = require("uuid");

console.log(uuid()); //will generate a different id  to the console

// DETAILS OF DEPENDENCIES AND DEV DEPENDENCIES

// we get semantic versioning number
// The First number main the Major Version

// The 2nd one  mean the Minor version

// 3rd one mean means a patch

//  minor and patches : now the carret ^ means go a head and allow an update  to the minor version and the patch if neede but don't updata the major version  cause could have breaking changes to application

// specific version only :   if you don't put any thing in front of number mean specifically this version  and only this version for this project will work

// patches only :  ~ this mean go ahead and update the patch version  but don't update the minor version

// update every thing : * all the time  use the absolute latest version every time  that is not safe

// with npm if we wanna install specific version  or different version  we use npm install packageName @specificVersionWeWant When we dont' specify any version we get the latest version

// to check update npm update

//  npm uninstall or un or rm  Note : when we remove dependencies that we are using in script we should change the script manually npm not gonna change the script for us
