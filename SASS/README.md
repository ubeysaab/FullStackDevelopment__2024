what is SASS and what we even want to use it ?

it's a language that basically extends css to give  extra features that making writing styles easier  more flexible and more reusable and it does this by bringing typical programming constructs like, loops, variables and inheritance into CSS 

in this tutorial we're gonna build a mini CSS library similar to something like bootstrap and tailwind using SASS and it's gonna include a lot  of utility classes for things like spacing, border Radius, opacity, andall taht just as well as a responsive grid  system and some ready-made components like cards buttons and a navbar and tehn you can customize and reuse that CSS library  in your own perosnal projects to speed up your  development and while we do this we are gonna learn all the basics of SASS as well as some  of the more advanced feature too 


*prerequests*
- CSS
- The basics of any programming language 



## introduction 
Browsers don't understand raw SASS files we can't just hook up a SASS file to our HTML pages like we would with a CSS file and just expect it to work, it won't we need to process SASS into CSS before it works  in a browser and that's really easy to do  there's a ton of free tools that can do it for  us the way we will do it is by using a _task runner called Gulp_ and for using it we gonna need _Node.js_ installed on our computers because we'll be using the node  package manager to install _Gulp_ and some plugins into our project 

## Compiling SASS
every thing we can do with CSS  we can do in these scss files as  well and then we can sprinkle the extra SASS features  on top when we need them .

how do we use these styles  in our HTML file well in general browser don't understand SASS so we need to compile sass file into a css file  then we can hook that css fileup to our html page 

now there's several options when it comes to compiling sass to css a really easy option if we using VSCode is to use the  _live SASS Compiler_ package 

// how ever the way that'll be doing it  is by using a _Gulp_ as we mentioned before it's a little more work to setup  than using live compiler  but _it offers more compilation options  including the ability to tree  shake or purge any unused styles later on and it's also gonna allow us to use the sass debug tool as well  which the live sass compiler doesn't allow  at the time being_ so to do this
1. we gonna run the below commands in our terminal `npm init -y` and we'll see _package.json_ file in our directory then `npm i gulp gulp-sass sass --save-dev`
    gulp : is the task runner which will ultimately run our  compilation task

    gulp-sass : is the sass task plugin for gulp which will compile our sass 

    sass : is what the gulp sass plugin will use under the hood 

2. we'll create _gulp_ file which is just _JS_ file that contain functions for _gulp_ to run  and one of those functions is gonna be for compiling our sass to css the file should be called _gulpfile.js_

3. Prepare gulpfile.js all notes are there 




## Variables 
variables  are useful in CSS  when we have some kind of values  like theme colors or specific font sizes or something else that we use a lot in our website so that instead of rewriting that value  over and over again for different CSS selectors and rules ,we can just write it once  as a variable and whenever we wanna use that  value we just call it,and if we want to change the value at any point we just have to update the value once where it's stored in the variable and then every rule and selector using this variable gonna update so it makes _maintainig code much easier_
<!-- reference the variable instead of using the hardcoded value so when ever we wanna change the color or theme or font size we don't need to scroll down to every selector that uses that property in the future -->

the way we create variable in SASS is `$variableName:value;`



## Partials & @import 
when we have so much code  our file gonna be very long and very messy pretty quickly so instead with SASS we can use what's known  as **Partials**
which is basically  a way to split our code up into multiple different files(so for example we can have a file for variables a file for buttons  a file for reset CSS)  and then we could just bring all of those partial files together into  a single root SASS file using `@import 'filename'`. 


using partials make our code modular easier to read and maintain since it's split into logical files 

_There is one issue with this_ a lot of the time in whatever task runner is compiling the SASS we gonna see something like this
```js  
function buildStyles() {
 // inside this function we need to
  //   1. take in a source sass file 
  // 2. compile it to css file 
  // 3. pipe it to some kind of destination folder 

  return src("*.scss").pipe(sass()).pipe(dest('./css'))

}



function wathcher() {
  // this function will actively watch our  source sass file and then when we make changes to that file and save them it's gonna automatically run `buildStyles` function 

  // watch take array of files as an argument, as a second argument it take a function that we wanna run when this files changes 
  watch(['*.scss'], buildStyles)
}



```
'*' mean look to any file name with this extension and compile it. So sometimes developers do this because they might want several style sheets for different pages in a website, so therefore they could have several different SASS files that need compiling so now our build task is gonna potentially  build multiple SASS file into CSS files  and our watch task is also watching multiple SASS files 

when we do this and run `gulp` command is gonna compile our variables file to CSS file which gonna be empty because is just SASS variables and they're not output in the final CSS(if there was other SASS  inside this variable as well then it would compiled  into CSS and output it into CSS folder). So

**When we don't have a file to be compiled  we add "_" underScore at the beginning of the file name** 
when we do this the SASS compiler is gonna ignore this file. So any file is starting with an underscore it's not gonna compiled into a CSS, so "_" is our way of telling SASS that this file is just a partial which we might use elsewhere  bu we don't want to compiling 

> The order of imports in file **does matter** _because different files might depend on code that created previously  in other files_ .(if a file depends on a value declared  in another file then it must be *below*  the file it depends on  because SASS compiler like normal CSS is work top to down )
## Project structure
we gonna build our own minin CSS  library like bootstrap or tailwind or bulmer or something else and its gonna be a mini version veri simplified  version of one of this and then we're gonna use that CSS library to design some kind of web page later on.

1. we gonna set up decent project  structure so we don't have SASS files flying around everywhere and instead they're organized in a nice way that's gonna make updating our project really easy 



## Nested Rules 
is the ability to nest a CSS rule in another CSS rule which give as the ability to  organize all of our selectors together

## Using Math 
<!-- _card.scss -->
using the multiplication, devision,etc.. to work out the values of different variables

**To divide something we should use the 'math' package  and to do this we go to the top of the file and write `@use 'sass:math' ` **

> We use '@use' to use builtIn modules 

the 'math.div' is muck like a function in a normal programming language


### Debug SASS files 
let's say we wanna perform some kind of calcualtions wich is bit complex  and we want to debug it, we wanna to see what the value is  of that calculation in the console  so we use `@debug  theOperation` to do that


## Maps 
<!-- maps are a bit like associative arrays  in programming languages or maybe a little bit like an object in javascript. _variables.scss -->

Is basically a way we can collect a lot of different variables or values together in some kind of collection and that collection is gonna have {key:value} pairs and they're really useful for generating utility classes whereby  loop through a map  and generate a class for each value in that map.


we can create map by `$mapName:("key":value,"key":value ,.....);`


## Loops (@each&@for)
<!-- _colors.scss -->
by using loops we can cycling through the map and generating classes for each of these items inside the map 

to cycling through a map  we say `@each $key,$val in $mapName{}` 
$key and $val are local variables  , we cannot use them outside the scope of the loop 

> To use a varible inside the selector name  we use #{$variable} 


> In "mix" function the order does matter  if the white is the first parameter lighting will go incremently if the white is 2nd parameter lighting will go decremently.




## Conditional (@if)
<!-- _colors.scss -->
basically check  a certain condition with it and if that condition is true then we can perform some task 

> We don't use "" inside the condition mean if($val == white) not ($val =="white")



## [Parent Selector](https://sass-lang.com/documentation/style-rules/parent-selector/) 
This gonna help us create variations  of classes to add effects like hover and other psuedo effect like nth-child,visited,last-child,etc..
<!-- _colors.scss -->



## Mixins & @include 
<!-- _buttons.scss -->
Is a way for us to group a bunch of  CSS properties and values so that it can be included in many different CSS rules without duplicate the code.

> Mixin's taking arguments and take a default values for the arguments to use when no value passing in



## Functions 
Functions may take an argument or it might do some manipulation  with that and it the end it returns a single value  which we can sometimes use for property

## Creating Utility Classes 
<!-- utilities.scss -->
The best way to creating utilities is making a very big map of different utilities and using math package on the base variables we have to control all values from onewhere 

1. To use a varible inside the selector name  we use #{$variable}  

2. when we wanna use a variable to be CSS property inside a selector we use #{$var} also


> the inner maps inside utilities map should have CSS PropertyName 

****

## Media Queries 
<!-- breakpoints.scss -->
Our media queries basically gonna be mixins  which we can just drop into our other selectors 


## Grid System 





## Important Notes 
**The order of imports in the main file does matter and should be :**
1. Variables & Functions : things gonna be usually over and over again

2. Base & Layout Stuff :  reset styles , top level styles  , grid system , media queries

3. Colors : to generate classes like for backgrounds or text colors they're gonna use variables and maybe functions 

4. Components : (button, card ,navbar,etc..)

5. Utilities : (margin,padding,border,opacity) classes




**We d'nt ever want to hard code stuff because then it makes updating  things later harder  so make every thing depend on variables**



**Don't give the Components explicitly width or height**

