// import some functions from gulp 
const { src, dest, watch, series } = require('gulp');

// gulpsass gonna return function that we need to invoke it and pass in our sass compiler , and all in all this gonna return another function  which we're calling sass in this file. we just need to invoke it later on to compile our sass  to css 
const sass = require("gulp-sass")(require('sass'))




// 2. create function  to be responsible for  compiling sass to css 

function buildStyles() {
  // inside this function we need to
  //   1. take in a source sass file 
  // 2. compile it to css file 
  // 3. pipe it to some kind of destination folder 

  return src("./shinobi/**/*.scss").pipe(sass()).pipe(dest('./css'))
  //  ! doulbe astriks means any sub folders as well 
}


function wathcher() {
  // this function will actively watch our  source sass file and then when we make changes to that file and save them it's gonna automatically run `buildStyles` function 

  // watch take array of files as an argument, as a second argument it take a function that we wanna run when this files changes 
  watch(['./shinobi/**/*.scss'], buildStyles)
}



// ? how we actually run these functions  ? 
//  *  first of all we need to export them from this   so we will say  that 
// * we need to export and run a series of functions  the buildStyles one first of all to build the styles initially and then  the wathcer one to watch our files and recompile every time we change it  so we can use the series function that we imported at the top to export them  in order 
exports.default = series(buildStyles, wathcher)
// ! module.exports not gonna work learn why???

//  after doing this  go to terminal and run `gulp` command  which is gonna lock in our gulp file at  our exported function and it's gonna run  each one of these in turn 

