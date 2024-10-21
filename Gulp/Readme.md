# Gulp Crash Course 



## What is Gulp 
1. Open Source Javascript Toolkit & Task Runner 
2. Front End Build System 
3. Built On Node.Js And Npm 
4. Used For Time Consuming & Repetitive Tasks 
5. Have Hundreds Of Plugins Available For Different Tasks


### Common Tasks 
1. Minification Of Scripts And Styles.
<!-- Minification means taking the file and remvoe all comments all white space which makes it lighter in turn to make application  faster  -->
2. Concatenation
3. Cache Busing 
4. Testing, Linting & Optimization
5. Dev Servers


## How Gulp Works 
1. Gulp Build on [node steams](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)(a continuous flow of data that can maipulated  asynchronously)  these streams facilitate the connection of file operations  through some thing called ⬇️


2. Pipeline (a chain  of processing elements and they're a range so that the output of one element is actually the input of the next element). so you can essentialy set up ⬇️

3. Single Purpose Plugins ( to run task after task) and this all dont using   `.pipe()` operator 


4. Files Not Affected Until All Plugins Are Processed

![alt text](image.png)



## Gulp vs Grunt 


1. Gulp is code over configuration. Grunt is configuration over code.

2. Gulp is easier to read than Grunt 
3. Gulp is based on streams, Grunt is based on files 



## Getting Started 

  ### Top Level Functions 
  - gulp.task - Define tasks
  - gulp.src - Point to files to use
  - gulp.dest - Points to folder to output
  - gulp.watch - Watch files and folders for changes



  



## Some Gulp Plugins 
1. gulp-sass: Converts SCSS (Sass) files into CSS. it need another package call sass.

2. gulp-cssnano: Minifies CSS files to reduce file size.

3. gulp-autoprefixer:Adds vendor prefixes(-webkit ,-moz) to CSS rules using values from "Can I Use".

4. gulp-rename:Renames files in a stream (optional)

5. gulp-babel:Transpiles ES6/ES7 JavaScript to ES5 using Babel toEnsures compatibility with older browsers that don't support newer JavaScript syntax.

6. gulp-uglify:Minifies JavaScript files to reduce file size.

7. gulp-imagemin:Optimizes images (JPEG, PNG, GIF, SVG) for web usage,Reduces file size without compromising quality

8. gulp-sourcemaps:Generates source maps for debugging. Helps in mapping the minified code back to the original source code.

9. browser-sync:Creates a development server that provides live reloading.Automatically reloads the browser when files change.

10. gulp-clean:Deletes files and folders.Useful for cleaning up the build directory before generating new files.


11. gulp-kit:Compiles .kit files into HTML, .kit files are similar to templates used for HTML components.



 
