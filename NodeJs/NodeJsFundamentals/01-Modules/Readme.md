- [Modules](#modules)
  - [Modules Types](#modules-types)
    - [CommonJs Modules](#commonjs-modules)
    - [EsModules](#esmodules)
    - [Key Differences Between CommonJS and ES Modules](#key-differences-between-commonjs-and-es-modules)
  - [Differences between `Dynamic` \& `compile-time` Loading.](#differences-between-dynamic--compile-time-loading)
    - [Dynamic Loading](#dynamic-loading)
    - [Compile-Time Loading](#compile-time-loading)
    - [Key Differences](#key-differences)
    - [Choosing Between the Two](#choosing-between-the-two)
    - [Important Notes](#important-notes)
  - [Resources](#resources)



# Modules
**Module** : is just a file that exports some code which allow developer to organize  code within their own projects or share code with the world through package manager like `npm` 


## Modules Types 
In JavaScript there are two types of Modules : 
### CommonJs Modules
CommonJS is mainly used in server-side JS apps with Node, as browsers don't support the use of CommonJS.


*In CommonJs*
- `module.exports` is the keyword we use to declare all we want to export from the file.
`module.exports = mod1Function`
<br/>

- If we wanted to export more than one thing from a single module, we can do it like this:
`module.exports = { mod1Function, mod1Function2 }`
<br/>

- `require` is the keyword we use to import everything we want to use from the file that declares and exports it to us.


> As a side comment, Node used to only support CommonJS to implement modules, but nowadays it also supports ESmodules which is a more modern approach. we can simply enable ESModule by <br/> 1.  changing the file extensions from .js to .mjs. <br/>2. adding a "type: module" field inside the package.json file With this statement we added, Node.js treats all files inside that package as ES modules, and we won’t have to change the file to a .mjs extension

```js
// ALIASES BY ADDING  FUN2
module.exports = {moduleFunction,func2 : moduleFunction2}

```

<br/>

### EsModules 
is a more modern approach that is currently supported by browser and server-side apps with Node.

*In ESModules*

- instead of `require` we're using `import`.
<br/>

-  instead of `module.exports` we're using `export`.  `export { hello, why }` this called `Named Export` to import it we use `import {hello,why} from ./mod1ES.js`.
<br/>

- Another feature available in ESmodules is **import renaming** `import { hello as hf, why as wf } from './mod1ES.js'`  Notice we use the **"as"** keyword after each function, and then rename it however we want.
  <br/>

- Another thing you could do is import all exports together and put them together in an object, like this:`import * as mod1 from './mod1.js' `

> The last thing is `default` keyword when we use it we don't have to destructure the module we export when we import it. We can use it just like this:`import ready, { hello as hf, why as wf } from './mod1ES.js'`. We can even rename the import whatever we want without the **"as"** keyword, since JavaScript "knows" that if we're not destructuring we'll be referring to the `default` import.






### Key Differences Between CommonJS and ES Modules

| Feature               | CommonJS                      | ES Modules (ESM)             |
|-----------------------|-------------------------------|-------------------------------|
| Syntax                | `require`, `module.exports`   | `import`, `export`           |
| Default export        | `module.exports = value`      | `export default value`       |
| Named export/import   | Use properties of exports     | `export` / `import {}`       |
| Import time           | Runtime (dynamic loading)     | Static (compile-time loading)|
| Environment           | Node.js                       | Browsers & modern Node.js    |

---


## Differences between `Dynamic` & `compile-time` Loading.
Dynamic loading and compile-time loading differ in **when and how** modules or resources are loaded into a program. Here’s a breakdown:



###  Dynamic Loading

 **Definition:**
Dynamic loading refers to loading resources, such as modules, libraries, or files, at runtime (while the program is running).  

 **Key Characteristics:**
- **Timing:** Happens *after* the application has started.
- **On-Demand:** Resources are loaded only when they are needed, reducing initial startup time.
- **Flexibility:** Allows conditional imports or lazy loading based on user interaction or application state.
- **Performance Impact:** Can introduce slight delays at runtime when resources are fetched or loaded.
- **Examples:**
  - In **JavaScript (ESM):**
    ```javascript
    if (condition) {
      import('./module.js').then((module) => {
        module.doSomething();
      });
    }
    ```
  - In **CommonJS:**
    ```javascript
    if (condition) {
      const module = require('./module');
      module.doSomething();
    }
    ```

 **Use Cases:**
- Lazy-loading components or libraries in web applications.
- Loading large libraries or assets only when needed.
- Reducing initial bundle size in Single Page Applications (SPAs).



###  Compile-Time Loading

**Definition:**
Compile-time loading refers to loading modules or resources during the build or compilation phase, before the application runs.  

 **Key Characteristics:**
- **Timing:** Happens *before* the application starts.
- **Static Imports:** The application knows about the modules it needs in advance, leading to predictable behavior.
- **Performance Impact:** Reduces runtime overhead since all modules are pre-loaded into the application.
- **Optimization:** Facilitates optimizations like tree-shaking, minification, and bundling.
- **Examples:**
  - In **JavaScript (ESM):**
    ```javascript
    import { doSomething } from './module.js';
    doSomething();
    ```
  - In **CommonJS:**
    ```javascript
    const { doSomething } = require('./module');
    doSomething();
    ```

 **Use Cases:**
- Core functionality that is always needed.
- Modules that do not change based on runtime conditions.
- Optimizing for environments where startup time is critical.



### Key Differences

| **Aspect**             | **Dynamic Loading**                | **Compile-Time Loading**          |
|------------------------|------------------------------------|-----------------------------------|
| **When**               | At runtime                        | At build/compile time            |
| **Flexibility**        | Highly flexible, conditional      | Static, pre-determined           |
| **Performance**        | Might slow runtime execution      | Faster at runtime                |
| **Bundle Size**        | Smaller initial size, grows later | Entire code included upfront      |
| **Tree-Shaking**       | Not optimized for tree-shaking    | Optimized with modern bundlers   |
| **Use Case**           | On-demand or lazy-loaded modules  | Always-needed modules            |



### Choosing Between the Two
- **Dynamic Loading** is ideal for applications where:
  - Certain features or modules are rarely used.
  - You want to improve initial load performance.
  - The resources are large or optional.

- **Compile-Time Loading** is better for:
  - Core application logic that is always needed.
  - Environments requiring strict static analysis or optimizations.
  - Codebases where predictable module behavior is important.

















### Important Notes 
1. The automatic import statment maybe don't add the `.js` extension so we need to add it manually(it got to point directly to the resource that gonna give us a JS file). or we will get the error `ERR_MODULE_NOT_FOUND`.
<br/>

2. On the script tag. We need to declare `type="module"` in order to use the JS module feature. If we don't, we'll get an error like this `Uncaught SyntaxError: Cannot use import statement outside a module`.because script tag by default has `type=text/javascript` which is how the browser interpret the content of script tag as script rather than a module 

3. **The module can use other modules, script can not.**


<!-- 4. CORS : Access to script at 'file:///C:/Users/Uby/Desktop/JavaScript/modules/main.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted. when we get this error the thing that we should do is serve this file on an HTTP server. By run `npx run serve` -->







## Resources 
[Modules in JavaScript – CommonJS and ESmodules Explained](https://www.freecodecamp.org/news/modules-in-javascript/#bundlingmodules)

[CommonJs vs.ESModules](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/?ref=dailydev)

[Use JS modules in the browser](https://egghead.io/lessons/javascript-use-javascript-modules-in-the-browser)

<!-- https://egghead.io/courses/kent-s-blog-posts-as-screencasts-eefa540c -->
<!-- 

### **1. Dynamic Loading**

Dynamic loading is typically used when you want to load a module or resource **at runtime**. This can help reduce the initial load time of an application by loading resources only when needed.

#### **Example in JavaScript (ESM):**
```javascript
// Dynamic import: Loads the module when the button is clicked.
document.getElementById('loadModuleButton').addEventListener('click', async () => {
  const module = await import('./math.js');
  console.log(module.add(5, 3)); // Output: 8
});

// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

#### **Explanation:**
- The `math.js` module is only loaded when the button is clicked, not when the application starts.

---

### **2. Compile-Time Loading**

Compile-time loading involves importing modules **before the application runs**. All required modules are included at the time of bundling or compilation.

#### **Example in JavaScript (ESM):**
```javascript
// Static import: Loads the module during compilation or bundling.
import { add, subtract } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6;

// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

#### **Explanation:**
- The `math.js` module is loaded at compile-time. Its functions are available immediately when the application runs.

---

### **Key Points to Notice**
- **Dynamic Loading:**  
  The module is fetched on demand, making it useful for features or modules that are not always needed. For example, you might dynamically load a charting library when the user navigates to a dashboard page.

- **Compile-Time Loading:**  
  The module is pre-loaded and bundled with the application, ensuring it is always available when the application starts. This is more predictable and efficient for core modules. -->