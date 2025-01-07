
what is SASS and what we even want to use it ?

it's a language that basically extends css to give  extra features that making writing styles easier  more flexible and more reusable and it does this by bringing typical programming constructs like, loops, variables and inheritance into CSS 

in this tutorial we're gonna build a mini CSS library similar to something like bootstrap and tailwind using SASS and it's gonna include a lot  of utility classes for things like spacing, border Radius, opacity, andall taht just as well as a responsive grid  system and some ready-made components like cards buttons and a navbar and tehn you can customize and reuse that CSS library  in your own perosnal projects to speed up your  development and while we do this we are gonna learn all the basics of SASS as well as some  of the more advanced feature too 


*prerequests*
- CSS
- The basics of any programming language 


*Syllabus*
- [introduction](#introduction)
- [Compiling SASS](#compiling-sass)
- [Variables](#variables)
  - [Variables types](#variables-types)
  - [Some Maps Methods](#some-maps-methods)
- [Partials \& @import](#partials--import)
  - [SASS Partials and Import Order](#sass-partials-and-import-order)
  - [Important Notes about `@import`(deprecated)](#important-notes-about-importdeprecated)
    - [The `@use` and `@forward` Rules in SASS](#the-use-and-forward-rules-in-sass)
      - [`@use`:](#use)
      - [`@forward`:](#forward)
      - [Key Differences Between `@use` and `@forward`:](#key-differences-between-use-and-forward)
- [Nested Rules](#nested-rules)
- [Using Math](#using-math)
- [Debug SASS files](#debug-sass-files)
- [Creating Utility Classes](#creating-utility-classes)
  - [Overview](#overview)
  - [Utility Class Structure](#utility-class-structure)
  - [Example of Utility Map Definition](#example-of-utility-map-definition)
  - [Loops (`@each` \& `@for`)](#loops-each--for)
    - [Cycling Through a Map](#cycling-through-a-map)
  - [Example of Looping Through Utility Classes](#example-of-looping-through-utility-classes)
  - [Conditional (`@if`)](#conditional-if)
  - [Example of Conditional Logic in Utility Classes](#example-of-conditional-logic-in-utility-classes)
  - [Parent Selector](#parent-selector)
  - [Example of Parent Selector](#example-of-parent-selector)
- [Mixins \& @include](#mixins--include)
- [Functions](#functions)
- [Media Queries](#media-queries)
- [Using `@extend`](#using-extend)
  - [Using `@extend` with Placeholders](#using-extend-with-placeholders)
  - [Differences between `mixin` \& `extend`](#differences-between-mixin--extend)
  - [When to Use Each](#when-to-use-each)
- [Purgin CSS](#purgin-css)
- [Customize The Library](#customize-the-library)
- [Important Notes](#important-notes)



## introduction 
Browsers don't understand raw SASS files, so we can't just hook up a SASS file to our HTML pages like we would with a CSS file and expect it to work—it won't. We need to process SASS into CSS before it can work in a browser, and that's really easy to do. There are a ton of free tools available that can handle this for us. The way we will do it is by using a task runner called **Gulp**. To use it, we need Node.js installed on our computers because we'll be using the Node Package Manager to install **Gulp** and some plugins into our project.

---

## Compiling SASS
Everything we can do with CSS, we can also do in SCSS files, and then we can sprinkle in the extra SASS features when we need them.
**How do we use these styles in our HTML file?** Well, browsers don't understand SASS directly, so we need to compile the SASS file into a CSS file. Once that's done, we can hook that CSS file up to our HTML page.


Now, there are several options for compiling SASS to CSS. A really easy option, if you're using VSCode, is to use the Live SASS Compiler package.


However, the way we'll be doing it is by using **Gulp**, as we mentioned before. While it requires a bit more setup than using the Live Compiler, *it offers more compilation options, including the ability to tree-shake or purge any unused styles* later on. It also allows us to use the SASS debug tool, which the Live SASS Compiler does not support at the moment.





1. we gonna run the below commands in our terminal `npm init -y` and we'll see _package.json_ file in our directory then `npm i gulp gulp-sass sass --save-dev`
    gulp : is the task runner which will ultimately run our  compilation task

    gulp-sass : is the SASS task plugin for gulp which will compile our SASS 

    sass : is what the gulp sass plugin will use under the hood 

2. Create a gulpfile.js file, which is a JavaScript file containing functions for Gulp to run. One of these functions will handle compiling SASS to CSS.

3. Prepare the gulpfile.js with the required configuration; **all necessary notes are included there**.


---

## Variables 
Variables are useful in CSS when we have values like theme colors, specific font sizes, or other frequently used properties in our website. Instead of rewriting those values repeatedly for different CSS selectors and rules, we can define them once as variables. Whenever we want to use those values, we simply reference the variables. If we need to change a value later, we only have to update it once where it's stored in the variable. This automatically updates every rule and selector that uses the variable, making code maintenance much easier.

<!-- reference the variable instead of using the hardcoded value so when ever we wanna change the color or theme or font size we don't need to scroll down to every selector that uses that property in the future -->

<!-- the way we create variable in SASS is `$variableName:value;` -->

### Variables types 
Variables are used to store values such as colors, fonts, or any CSS value that you can reuse throughout your stylesheet. Here's a breakdown of variable types in SCSS, using your example:

1. Basic Variables
These are single-value variables that store a single piece of data, such as a color, size, or number,boolean.

```scss
$primary: #326dee; // A hexadecimal color value
$error: #d32752;   // Another hexadecimal color value
```

2. Maps
Maps in SCSS are similar to JavaScript objects. They are collections of `key:value` pairs, making them perfect for grouping related values.

>Maps are really useful for generating utility classes whereby  loop through a map  and generate a class for each value in that map.

```scss
$colors: (
  "primary": $primary, // Using another variable as the value
  "error": $error,
  "blue": #1919e6, // A direct hexadecimal value
  "red": #e61919,
  "yellow": #e6e619,
  "green": #19e635,

);
```

**Use Case:** Maps are commonly used for theming or creating a centralized set of styles that can be accessed dynamically by using`map-get($mapName, "propertyName");` .

### Some Maps Methods 

 1. **`map-get($map, $key)`**
This function return the value associated with a given key from a map.

```scss
@debug map-get($colors, "purple");
```


 2. **`map-has-key($map, $key)`**
This function checks whether a given key exists in the map and returns a Boolean value (`true` or `false`).

```scss
@debug map-has-key($colors, "secondary");
@debug map-has-key($colors, "tertiary");
```


 3. **`map-remove($map, $key)`**
This function removes the key-value pair associated with the specified key from the map.

```scss
@debug map-remove($colors, "primary");
```



 4. **`map-merge($map1, $map2)`**
This function merges two maps into one. If a key in `$map2` already exists in `$map1`, the value from `$map2` will overwrite the value from `$map1`.

```scss
@debug map-merge($colors, ("pink": #ffc0cb));
```

> @debug use to show the return value 



---

## Partials & @import 
When we have a lot of code, our file can become very long and messy quickly. Instead, with SASS, we can use what's known as **partials**, which is a way to split our code into multiple files. For example, we can have a file for variables, a file for buttons, and a file for reset CSS. Then, we can bring all of those partial files together into a single root SASS file using `@import 'filename'`.

Using partials makes our code modular, easier to read, and easier to maintain since it's split into logical files.

There is one issue with this: a lot of the time, when the task runner is compiling the SASS, we might see something like this...



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
Here is the corrected version of the statements:

### SASS Partials and Import Order

**When we don't have a file to be compiled, we add an underscore (`_`) at the beginning of the file name.**  
When we do this, the SASS compiler will ignore this file. Any file that starts with an underscore will not be compiled into CSS. So, the underscore is our way of telling SASS that this file is just a partial, which we might use elsewhere, but we don't want it to be compiled.

> The order of imports in a file **does matter** _because different files might depend on code declared in other files_. If a file depends on a value declared in another file, it must be *below* the file it depends on, because the SASS compiler, like normal CSS, works top to bottom.

the order should be like this : 
1. variables & functions : things gonna be usually  use over and over again.
2. base &layout stuff :  reset styles , top level styles  , grid system, breakPoints

3. colors : to generate classes like for backgrounds or text colors they're gonna use variables and maybe functions 
4. Components : (button, card ,navbar,etc..)
5. Utilities : (margin,padding,border,opacity) classes

The order is showed above from 3 to 5 might not matter so much(because you may use utility classes in your components)  the main ones are 1 and 2. 

### Important Notes about `@import`(deprecated)

#### The `@use` and `@forward` Rules in SASS

The `@import` rule, which was previously used to bring in SASS files, has been **deprecated** in favor of `@use` and `@forward`.

##### `@use`:
- **Purpose**: The `@use` rule loads a partial and makes its variables, mixins, and functions available with a namespace.
- **Advantages**:
  - Avoids global namespace pollution, meaning you can keep your code clean and organized.
  - Encourages better modularity by only exposing what you explicitly choose to use.
  
  **Example:**
  ```scss
  // _variables.scss
  $primary-color: #326dee;
  
  // main.scss
  @use 'variables';  // 'variables' will be the namespace

  .button {
    color: variables.$primary-color; // Accessing the variable with the namespace
  }
  ```

  In this example, instead of just importing and directly using `$primary-color`, we now reference it as `variables.$primary-color`, which avoids conflicts in the global namespace.

##### `@forward`:
- **Purpose**: The `@forward` rule is used to re-export styles from one partial to another. This allows you to bundle multiple files and only expose them as a package through one file.
- **Advantages**:
  - It helps organize and expose parts of a codebase, especially in larger projects.
  - It reduces the need for multiple `@use` statements, simplifying your code.
  
  **Example:**
  ```scss
  // _buttons.scss
  @forward 'variables';  // Forward variables to make them available

  // main.scss
  @use 'buttons';  // This now gives access to 'variables' via the 'buttons' namespace

  .button {
    color: buttons.$primary-color; // Accessing the variable through 'buttons'
  }
  ```

  Here, the `@forward` statement in `_buttons.scss` re-exports `variables.scss`. When we `@use 'buttons'`, the contents of `variables.scss` become available under the `buttons` namespace.

---

##### Key Differences Between `@use` and `@forward`:

Here’s a comparison of `@use` and `@forward` in table format:

| **Feature**                   | **`@use`**                                 | **`@forward`**                             |
|-------------------------------|--------------------------------------------|--------------------------------------------|
| **Purpose**                    | Loads the contents of a partial into the current file. | Re-exports the contents of a partial for use in other files. |
| **What It Does**               | Makes the content available in the current file, with a namespace. | Exposes the content of a file to other files indirectly through a forwarding file. |
| **Usage**                      | `@use 'filename';`                        | `@forward 'filename';`                    |
| **Scope**                      | Imports content directly into the current file, scoped under a namespace. | Makes the content available to other files that `@use` the forwarding file. |
| **Namespace**                  | Automatically creates a namespace for the imported content. | No namespace is automatically created; the content is forwarded as-is. |
| **Accessing Variables/Functions** | Requires a namespace (e.g., `namespace.$variable`). | Accessed through the namespace of the forwarding file (e.g., `file.$variable`). |
| **Multiple Imports**           | The file is loaded only once per stylesheet, even if used multiple times. | The forwarded file can be accessed in multiple places without re-loading the original file. |
| **Common Use Case**            | When you need to access and use variables, mixins, or functions from another file directly in the current file. | When you want to aggregate several partials and expose them together, allowing other files to use them via one import. 





<!-- 1. **`@use`**:
   - Directly loads a partial and applies a namespace.
   - Makes the contents (variables, mixins, functions) available for use in the current file.
   - Example: `@use 'variables';`

1. **`@forward`**:
   - Re-exports a partial for use in other files.
   - Primarily used to bundle multiple partials and expose them as a single file, reducing the need for multiple imports.
   - Example: `@forward 'variables';`

In summary:
- Use **`@use`** to load and access the content of a file.
- Use **`@forward`** to share the contents of one file with other files, acting as a bridge to re-export the code. -->

Both rules are designed to make SASS files more modular, organized, and maintainable, and they replace the outdated `@import` rule.


<!-- ## Project structure
we gonna build our own minin CSS  library like bootstrap or tailwind or bulmer or something else and its gonna be a mini version veri simplified  version of one of this and then we're gonna use that CSS library to design some kind of web page later on.

1. we gonna set up decent project  structure so we don't have SASS files flying around everywhere and instead they're organized in a nice way that's gonna make updating our project really easy  -->



## Nested Rules 
Nesting is the ability to nest a CSS rule inside another CSS rule, which allows us to organize all of our selectors together.

## Using Math 


**Using Mathematical Operations in SASS**  
To perform operations like multiplication, division, etc., on variables, we can use the built-in `math` module in SASS.

**To divide something, we should use the 'math' package, and to do this, we go to the top of the file and write `@use 'sass:math'`.**

> We use `@use` to access built-in modules.

The `math.div` function is similar to a function in a normal programming language, allowing us to perform division safely (since using the `/` operator for division in SASS could cause issues in some contexts).

```scss
@use "sass:math";
 
.card{
  display: block;
  padding:$base-padding;
  border: $base-border-thickness solid #ddd;
  box-shadow: $base-box-shadow;
  border-radius: math.div($base-border-radius,4);
}
```


## Debug SASS files 
let's say we wanna perform some kind of calcualtions wich is bit complex  and we want to debug it, we wanna to see what the value is  of that calculation in the console  so we use `@debug  theOperation` to do that




## Creating Utility Classes

### Overview
The best way to create utilities is by building a large map of different utilities and using the `math` package on the **base variables** we have to control all values from one place.

### Utility Class Structure
1. **To use a variable inside the selector name**:  
   We use `#{variable}`.

2. **When we want to use a variable as a CSS property inside a selector**:  
   We use `#{var}`.

> The inner maps inside the utilities map **should have CSS property names**.

### Example of Utility Map Definition
```scss
$utilities: (
  "padding": (
    "prefix": "p",
    "values": (
      "0": 0,
      "1": $base-padding,
      "2": $base-padding * 2,
      "3": $base-padding * 3,
      "4": $base-padding * 4,
    )
  ),
  "border-radius": (
    "prefix": "br",
    "values": (
      "default": $base-border-radius,
      "nn": 0,
      "xs": math.div($base-border-radius, 4),
      "sm": math.div($base-border-radius, 2),
      "lg": $base-border-radius * 2,
      "circle": 50%
    )
  ),
  "font-size": (
    "prefix": "fs",
    "values": (
      "sm": $font-size-s,
      "md": $base-font-size,
      "lg": $font-size-l,
      "xl": $font-size-xl,
      "xxl": $font-size-xxl,
    )
  ),
  "display": (
    "prefix": "display",
    "values": (
      "nn": none,
      "bl": block,
      "in-bl": inline-block,
      "fl": flex,
    )
  ),
);
```

### Loops (`@each` & `@for`)

We can use loops to cycle through the map and generate classes for each of these items inside the map.

#### Cycling Through a Map
To cycle through a map, we use `@each $key, $val in $mapName {}`. `$key` and `$val` are local variables, and they cannot be used outside the scope of the loop.

### Example of Looping Through Utility Classes
```scss
@each $property, $mapOfProperty in $utilities {
  @debug $property;

  $prefix: map-get($mapOfProperty, "prefix");
  $valuesInsideTheMapOfProperty: map-get($mapOfProperty, "values");

  @each $key, $value in $valuesInsideTheMapOfProperty {
    @if ($key == "default") {
      .#{$prefix} {
        #{$property}: $value;
      }
    } @else {
      .#{$prefix}-#{$key} {
        #{$property}: $value;
      }
    }
  }
}
```

### Conditional (`@if`)

The `@if` directive checks a certain condition, and if that condition is true, it performs a task. Perfect for applying styles based on specific conditions

> We don't use quotes inside the condition. Example: `if($val == white)` (not `($val == "white")`).

### Example of Conditional Logic in Utility Classes
```scss
@each $key, $val in $colors {
  .text-#{$key} {
    color: $val;

    @if ($val == $error) {
      &:hover {
        color: blue;
      }
      // ! BEM
      &__fire {
        color: $val;
        &:hover {
          color: purple;
        }
      }
    }
  }

  .bg-#{$key} {
    background-color: $val;
  }

  // Create light and dark variations for each color
  @if ($val != white and $val != black) {
    @for $i from 1 through 9 {
      .bg-#{$key}-light-#{$i} {
        // The order of the white and value parameters determines whether the lightening will be incremented or decremented
        background-color: mix(white, $val, $i * 10%);
      }

      .bg-#{$key}-dark-#{$i} {
        background-color: mix(black, $val, $i * 10%);
      }
    }
  }
}
```

### Parent Selector

The parent selector (`&`) helps us create variations of classes for pseudo-effects like `:hover`, `nth-child`, `:visited`, `:last-child`, etc.  without repeating selectors

### Example of Parent Selector
```scss
@each $key, $val in $colors {
  .text-#{$key} {
    color: $val;

    @if ($val == $error) {
      &:hover {
        color: red;
      }

      // BEM style
      &__fire {
        color: $val;
        &:hover {
          color: purple;
        }
      }
    }
  }
}
```

<!-- utilities.scss -->
<!-- The best way to creating utilities is making a very big map of different utilities and using math package on the base variables we have to control all values from onewhere 

1. To use a varible inside the selector name  we use #{$variable}  

2. when we wanna use a variable to be CSS property inside a selector we use #{$var} also


> the inner maps inside utilities map should have CSS PropertyName 


### Loops (@each&@for)
<!-- _colors.scss -->
<!-- by using loops we can cycling through the map and generating classes for each of these items inside the map  -->

<!-- to cycling through a map  we say `@each $key,$val in $mapName{}` 
$key and $val are local variables  , we cannot use them outside the scope of the loop 

> To use a varible inside the selector name  we use #{$variable}  -->

<!-- 
> In "mix" function the order does matter  if the white is the first parameter lighting will go incremently if the white is 2nd parameter lighting will go decremently. -->

<!-- 


### Conditional (@if)
<!-- _colors.scss -->
<!-- basically check  a certain condition with it and if that condition is true then we can perform some task 

> We don't use "" inside the condition mean if($val == white) not ($val =="white") -->



<!-- ### [Parent Selector](https://sass-lang.com/documentation/style-rules/parent-selector/) 
This gonna help us create variations  of classes to add effects like hover and other psuedo effect like nth-child,visited,last-child,etc..
_colors.scss --> --> -->



## Mixins & @include 
<!-- _buttons.scss -->
Is a way for us to group a bunch of  CSS properties and values so that it can be included in many different CSS rules without duplicate the code.

> Mixin's taking arguments and take a default values for the arguments to use when no value passing in

> Mixin's  are create by using `@mixin` and called using `@include`

```scss
// ! To avoid duplicating code in the classes below we creating a mixin 

@mixin btn($bgColor : #ddd){
  // if we don't give argument to the mixing the default we'll be #ddd
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  border: 0;
  padding: $base-padding $base-padding * 2;
  border-radius: $base-border-radius;
  background-color: $bgColor;
}
.btn{
  @include btn;
}

@each $key,$val in $colors {
  .btn-#{$key}{
    //// text-decoration: none;
    //// cursor: pointer;
    //// display: inline-block;
    //// border: 0;
    //// padding: $base-padding $base-padding * 2;
    //// border-radius: $base-border-radius;
    //// background-color: $val;
    //* instead of all line above **//
    @include btn($val);
    &:hover{
      background-color: lighten($color: $val, $amount: 10%);
      
    }
  } 
}
```

## Functions 
Functions may take an argument or perform some manipulation with it, and in the end, they return a single value. This value can sometimes be used as a property.

> we create funtions using `@function` and return the value using `@return`
```scss
@function light-comp($color) {
  $complement: complement($color); // Get the complementary color
  $light-complement: lighten($complement, 10%); // Lighten the complement by 10%
  @return $light-complement; // Return the lightened complement
}
```

## Media Queries 
<!-- breakpoints.scss -->
Our media queries basically gonna be `mixins`  which we can just drop into our other selectors 


By using `@ content` mean if we use this mixin else where, what ever we write inside it is gonna go right here. 
> we use `@content` to make the mixin reUsable

```scss
$breakpoints:(
  "xs":0,
  "sm":480px,
  "md":720px,
  "lg":960px,
  "xl":1200px,
);


@mixin xs{
  // don't hard code the value of the break points 
  @media (min-width:map-get($breakpoints,"xs")) {
    @content;
  }
};
@mixin sm{
  @media (min-width:map-get($breakpoints,"sm")) {
    @content;
  }
};
@mixin md{
  @media (min-width:map-get($breakpoints,"md")) {
    @content;
  }
};
@mixin lg{
  @media (min-width:map-get($breakpoints,"lg")) {
    @content;
  }
};
@mixin xl{
  @media (min-width:map-get($breakpoints,"xl")) {
    @content;
  }
};

// mixin for the breakpoint that we don't have in our map 

@mixin breakpoint($pb:0){
  @media (min-width:$bp) {
    @content;
  }
}

.test-queries{
  @include xs {
    color: red;
  }
  @include sm{
    color: blue;
  }
  @include md {
    color: green;
  }
  @include lg{
    color:purple;
  }
  @include xl{
    color: yellow;
  }
}

```

## Using `@extend`
The `@extend` directive in SCSS allows you to share styles between selectors by "inheriting" properties from one selector into another. 

```SCSS
.button {
  padding: 10px;
  background-color: blue;
}

.primary-button {
  @extend .button;
  color: white;
}

// ******OUTPUT CSS ******


.button,
.primary-button {
  padding: 10px;
  background-color: blue;
}

.primary-button {
  color: white;
}

```

### Using `@extend` with Placeholders
SCSS introduces placeholders (selectors prefixed with `%`) **to prevent generating unnecessary CSS rules when using** `@extend`.

```scss
%btn {
  padding: 10px;
  border-radius: 5px;
}

.primary-btn {
  @extend %btn;
  background-color: blue;
}

.secondary-btn {
  @extend %btn;
  background-color: gray;
}
```

### Differences between `mixin` & `extend`
Here’s a concise comparison between **mixins** and **@extend** in SCSS:

| **Aspect**                | **Mixin**                                                                                   | **@extend**                                                                                       |
|---------------------------|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Purpose**               | Reusable code blocks with arguments and dynamic logic.                                      | Share styles between selectors by combining them in the compiled CSS.                          |
| **Syntax**                | `@mixin name {}` and `@include name;`.                                                     | `@extend selector;`.                                                                            |
| **Output**                | Generates a new set of styles for every `@include`, increasing CSS size.                   | Combines selectors into a single rule, minimizing CSS size.                                     |
| **Arguments**             | Can take arguments and include logic like loops or conditionals.                           | Cannot take arguments or include dynamic logic.                                                 |
| **Flexibility**           | Highly flexible, can include variable content and logic.                                   | Limited to static, predefined selectors or placeholders.                                        |
| **Specificity**           | Generates independent CSS rules, maintaining specificity.                                  | Combines selectors, which can affect specificity.                                               |
| **Code Duplication**      | May duplicate styles in the output if used multiple times.                                 | Groups selectors into a single rule, avoiding duplication.                                      |
| **Use Case**              | When reusable, dynamic, or argument-driven blocks of code are needed.                      | When you need to share identical styles across multiple selectors.                              |
| **Global Scope**          | Scoped locally to where `@include` is used.                                                | Operates globally, affecting all instances of the extended selector or placeholder.             |
| **Placeholder Support**   | Does not use placeholders.                                                                 | Works well with placeholders (`%`), ensuring no standalone CSS rules are generated.             |
| **Dynamic Content**       | Ideal for dynamic content such as conditional styles, loops, or calculated values.         | Not suitable for dynamic content; only for sharing existing static styles.                      |

---



**Mixin Example**:
```scss
@mixin button($color) {
  background-color: $color;
  padding: 10px;
  border-radius: 5px;
}

.primary-btn {
  @include button(blue);
}

.secondary-btn {
  @include button(gray);
}
```

**Compiled CSS:**
```css
.primary-btn {
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
}

.secondary-btn {
  background-color: gray;
  padding: 10px;
  border-radius: 5px;
}
```


**@extend Example**:
```scss
%button {
  padding: 10px;
  border-radius: 5px;
}

.primary-btn {
  @extend %button;
  background-color: blue;
}

.secondary-btn {
  @extend %button;
  background-color: gray;
}
```

**Compiled CSS:**
```css
.primary-btn,
.secondary-btn {
  padding: 10px;
  border-radius: 5px;
}

.primary-btn {
  background-color: blue;
}

.secondary-btn {
  background-color: gray;
}
```

---

### When to Use Each
- **Mixin**: Use when you need **dynamic behavior**, **arguments**, or **logic**.
- **@extend**: Use for **structural styling** where selectors share identical styles and placeholders to avoid unnecessary CSS rules.


## Purgin CSS 
Even if we created small amount of components and utility classes our *CSS Output File* is already looking huge, and the more components and utility we will make  this file is gonna get bigger and the file size is gonna increase as well. 
Now the thing is we will probably never use all of these CSS rules and classes in our website  so its seems like massive file to load into a website when we might only use 10-20% of it at a pinch. 

So we need to set workflow wherby any compiled CSS rule
that not used in our HTML files are purged or removed from the final CSS file. 

to do this purging and to integrate it to our development process we'll be using another plugin for gulp called `purgecss`

To install it : `npm i gulp-purgecss`


```js

// import some functions from gulp 
const { src, dest, watch, series } = require('gulp');

// gulpsass gonna return function that we need to invoke it and pass in our sass compiler , and all in all this gonna return another function  which we're calling sass in this file. we just need to invoke it later on to compile our sass  to css 
const sass = require("gulp-sass")(require('sass'))


const purgeCss = require('gulp-purgecss')

// 2. create function  to be responsible for  compiling sass to css 

function buildStyles() {
  // inside this function we need to
  //   1. take in a source sass file 
  // 2. compile it to css file 
  //3. take out anycss rule we don't use
  // . pipe it to some kind of destination folder 

  return src("./shinobi/**/*.scss").pipe(sass()).pipe(purgeCss({content:["./*.html"]})).pipe(dest('./css'))
  //  ! doulbe astriks means any sub folders as well 
}

```

## Customize The Library 
In order to use the library in our projects we shoudl drag it directly to that project that we work on 
if we wanna use as it is we should create `gulpfile` and just run it using `gulp` (if project structure different you need to change the paths in gulpfile)
But if you want to extend or customize it a little bit change the variables in side it 
will typically what we wouldn't do  is go directly into the css library source and change those because you might end up breaking something  so instead what you could do is  create you own SASS folder  and create index.scss inside it and watch it from gulpfile and any customizations any changes you want to make  to the library you should put inside this file but inorder to do this you should use `!define` word inside the variablesfile in the variable beside to the variables so its take the value of that the library has defined when the variable is not declared before




To effectively use a CSS library in your projects, you have two main options: **using the library as is** or **customizing it to fit your needs**. 
- If you choose to use the library as is, simply include it in your project by adding it directly to your project folder. If the project structure requires adjustments, update the paths in the `gulpfile` to ensure it works correctly. Running `gulp` will process the library files and make them ready for use.

- For customization, it’s best not to directly modify the library’s source files to avoid breaking functionality or complicating future updates. Instead, create a SASS folder in your project and add a file named `index.scss`. Use this file for all your customizations and overrides. If you need to modify variables defined in the library, ensure the library’s variables use the `!default` keyword. This tells the compiler to use the library's values unless you have already declared the variable with a custom value in your `index.scss`.

Finally, configure your `gulpfile` to watch your `index.scss` file for changes. This ensures that any customizations you make are compiled into your project’s CSS. By following this method, you can extend or modify the library without compromising its integrity, keeping your workflow organized and future-proof.


> If you want your custom variable values to override the default ones provided by the library, you must declare those variables **before importing the library** in your `index.scss` file. This is because, during compilation, SASS processes the file from top to bottom. By declaring your variables first, the library will recognize and use your values instead of its defaults (if the variables in the library are marked with `!default`). 

Here’s a simple example:

```scss
// Declare your custom variables before importing the library
$primary-color: #ff5733;

// Import the library
@import 'library';

// Now the library will use your $primary-color instead of its default value.
```

















## Important Notes 

**We don't ever want to hard code stuff because then it makes updating  things later harder  so make every thing depend on variables**



**Don't give the Components explicitly width or height**

