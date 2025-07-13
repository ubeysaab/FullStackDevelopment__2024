## what is tailwind css : 
tailwind css is a utility-first framework that offers many predefined classes to help us rapidly build modern websites without ever leaving our HTML 


the differences between TailWind and Bootstrap,Material UI and others  that they're more opinionated, Tailwind CSS is just applied one CSS rule at a time it just uses predefined classes and that makes it very flexible and we can still style an element any way we want.

the strength of TailWind is that once we learn the classes we can apply it very quickly definitely  faster than write CSS from scratch 

## How TailWind Work 
When we use tailwind we create source file where we import all of the tailwind core styles and functionality and then we can also write our own CSS if we want to inside this file using tailwind features and syntax, then we use tailwind to process that source file into a  vanilla CSS output file at build time with all of the final CSS rules inside it, and then we can like to that CSS from our  HTML page.

so every time we make some kind of change to the source  CSS file we'd have to run a tailwind script to process that into a new output CSS file, now that may seem arduous but th egood thing is that with tailwind we mainly use utility classes  inside the HTML file it self  so we only rarely have to change the source CSS file and then reprocess into output file 
![alt text](image.png)



## setup

<!-- source folder : is where our source files are 

public folder : is where our final output CSS  after tailwind processed it and it's also gonna contain HTML and any front js as well so public folder  is the thing that is eventually deployed to a web host on the internet 


live server settings full reload : true ;



css linters unknown ignore 
 -->



npx prettier --write  **/*.html : it's look for all html files  and will only format  them, but what we're gonna use prettier for concerning Tailwind CSS is the class  order and that's because Tailwind has provided  this prettier plugin and they have recomended  class order that the classes be listed in so we won't have to think about that  as we write out the classes we just can  style the component as we  think of the classes and  then afterwards we can run prettier and it will auto format  that HTML and organize the class list  for us.




what tailwind does is it compiles the cssfrom this input.css file and it will create  it for us inside of the build directory where we tell it to. and what this does is it pulls in everything that tailwind defines. and then if ew want ot we can define our own CSS classes underneath this as well 

for remove the problems that @tailwind gives we can go to setting unknown css lint ignore

