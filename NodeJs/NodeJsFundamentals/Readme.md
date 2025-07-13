- [Node Js](#node-js)
  - [How Node.js Differs from Vanilla JavaScript](#how-nodejs-differs-from-vanilla-javascript)
  - [NPM(Node Package Manager)](#npmnode-package-manager)
    - [Initializing](#initializing)
    - [Set Defaults](#set-defaults)
    - [CHECK(Get) DEFAULTS](#checkget-defaults)
    - [DELETE DEFAULTS](#delete-defaults)
    - [Modules](#modules)
      - [Install Module(package)](#install-modulepackage)
        - [Using Module](#using-module)
      - [Globally Install](#globally-install)
      - [Update Module](#update-module)
      - [Uninstall Module](#uninstall-module)
      - [List Modules](#list-modules)
      - [Check Version of Module](#check-version-of-module)
    - [The Content Of `Package.json` After Install Module](#the-content-of-packagejson-after-install-module)
      - [`main` Field](#main-field)
      - [`type` Field](#type-field)
      - [`engines` Field](#engines-field)
      - [`Scripts` Field](#scripts-field)
      - [Production \& Development Dependency Fields](#production--development-dependency-fields)
        - [Details Of Dependencies And Dev Dependencies(Semantic Versioning)](#details-of-dependencies-and-dev-dependenciessemantic-versioning)
      - [Adding Custom Fields](#adding-custom-fields)
        - [`config` Field](#config-field)
        - [`private` Field](#private-field)
        - [keywords Field](#keywords-field)
    - [Other files/folders we will see after install Module(package)](#other-filesfolders-we-will-see-after-install-modulepackage)
  - [Modules](#modules-1)
    - [Modules Types](#modules-types)
      - [CommonJs Modules](#commonjs-modules)
      - [EsModules](#esmodules)
    - [Key Differences Between CommonJS and ES Modules](#key-differences-between-commonjs-and-es-modules)
    - [📊 Key Differences Between CommonJS and ES Modules (With Examples)](#-key-differences-between-commonjs-and-es-modules-with-examples)
    - [Differences between `Dynamic` \& `compile-time` Loading.](#differences-between-dynamic--compile-time-loading)
      - [Dynamic Loading](#dynamic-loading)
      - [Compile-Time Loading](#compile-time-loading)
    - [Key Differences](#key-differences)
    - [Choosing Between the Two](#choosing-between-the-two)
  - [Sync vs Async](#sync-vs-async)
  - [File System](#file-system)
    - [Streams \& Buffers](#streams--buffers)
      - [Pipe](#pipe)
  - [Node.js HTTP Server Notes](#nodejs-http-server-notes)
    - [Clients \& Server](#clients--server)
    - [Creating a server](#creating-a-server)
      - [Commonly Used Properties and Methods](#commonly-used-properties-and-methods)
        - [`request` Object](#request-object)
        - [`response` Object](#response-object)
          - [Status Codes](#status-codes)
      - [Localhost \& Port Numbers](#localhost--port-numbers)
        - [what is localhost ?](#what-is-localhost-)
        - [Port Numbers](#port-numbers)
      - [Redirecting](#redirecting)
    - [Important Notes](#important-notes)
  - [Resources](#resources)


 



# Node Js


## How Node.js Differs from Vanilla JavaScript

1. Node.js Runs on a Server
- Unlike Vanilla JavaScript, which runs in the browser (frontend), Node.js runs on a server (backend).

2. Console in Node.js
- In Node.js, `console` refers to the **terminal** window, whereas in the browser, it refers to the developer console.

3. Global Object
- In the browser, the `global` object is `window`, which provides access to properties like `window.innerHeight`.
- 
<br/>

- In Node.js, the global object is `global`, which is much smaller but includes similar properties.

```js
console.log(global);
```

4. Common Core Modules
- Node.js has built-in core modules that Vanilla JS doesn't have.
- These modules provide access to functionalities related to the `operating system, file system, and other server-side operations.`


> A **module** is simply a file that contains code with an `export` statement, allowing it to be used in another file.

Importing Common Core Modules
- In Node.js, we use `CommonJS` module syntax instead of `ES6 imports`.

ES6 Import (Used in Browsers)
```js
import moduleName from 'module-file';
```

CommonJS Import (Used in Node.js)
```js
const moduleName = require('module-file');
```

Example: Using the OS Module
```js
const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
```



| Feature                   | Node.js                                                      | Vanilla JavaScript (Browser)         |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------ |
| **Execution Environment** | Runs on a server (backend)                                   | Runs in a browser (frontend)         |
| **Console**               | Uses the terminal window                                     | Uses the browser's developer console |
| **Global Object**         | `global`                                                     | `window`                             |
| **Core Modules**          | Includes built-in modules for OS, file system, etc.          | Does not have server-side modules    |
| **Module System**         | Uses CommonJS (`require`)                                    | Uses ES6 modules (`import`)          |
| **APIs**                  | Lacks some browser APIs (e.g., `fetch`) but can use packages | Includes built-in browser APIs       |
| **File & Path Handling**  | Provides modules like `fs` and `path`                        | Uses browser-based storage APIs      |


5. Node.js Lacks Some Browser APIs
- Node.js does not include some JavaScript APIs like `fetch` (used for HTTP requests).
- However, we can install packages (via NPM) to add missing functionalities.


6. Importing Custom Modules
- We can create and import our own modules.

Example: Importing a Custom Math Module
```js
const { div, add } = require("./math");
console.log(div(625, 5));
console.log(add(25, 2));
```

7. Other Global Values in Node.js
Node.js provides several global values that are always accessible:
```js
console.log(__dirname);  // Directory name of the current module
console.log(__filename); // Filename of the current module
```

8. Working with the Path Module
The `path` module helps with file and directory paths.

```js
const path = require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
```



## NPM(Node Package Manager)

You don't need to have experience with node.js run time or node applications to be able to use npm. but you should have node.js to be installed on your machine in order to use it 

> modules and packages are the same thing they use interchangeably and modules are basically just JS libraries(files)




### Initializing 
To initialize a new `node.js` project we use `npm init` after running the script  cwe will need to give answer to few questions.



also if we wanna accept all these question with default values  we can run
`npm init -y` or `npm init --yes`


### Set Defaults
we can change the defaults for package.json with this
`npm config set init-author-name "ubey"`. Actually when we setting we don't even need to include word 'config'
`npm set  init-license "MIT"`







### CHECK(Get) DEFAULTS
 if wanna check what there is for default
`npm get  init-author-name`

### DELETE DEFAULTS
// how to remove  new defaults
`npm config delete init-author-name`



### Modules

<!-- lodash is js library  that gives us a bunch of utility functions that can things sort array loop through arrays set timeouts and delays just alldifferent things to  do with js  and it maks it a lot easier that vanilla js  -->

#### Install Module(package)

`npm install packageName --save` --save flag  it saves the modules to our package.json as dependency but as of npm 5.0.0, installed modules are added as a dependency by default, so the --save option is no longer needed. 

##### Using Module
Whenever we install a module and want to use it in our app (using CommonJS), we should create a variable and assign it the result of `require('module-name')`.

```javascript
const _ = require("lodash");
```

#### Globally Install 
we can install node package globally` use npm intall packageName -g` 
(with -g): puts stuff in /usr/local or wherever node is installed


> To see where our global modules being install we can run `npm root -g`


#### Update Module
update to the latest version `npm update packageName`

#### Uninstall Module
// `npm uninstall|un|rm  packageName`

> When we remove dependencies that we are using in script we should change the script manually npm not gonna change the script for us


#### List Modules

list all packages `npm list`. If we wanna list all the dependencies of the dependencies we installed we can run `npm list --depth 1` but alot of these dependencies also have them dependencies so we can just increment the `--depth (whatEverDepthLevelWeWantToSee)`


#### Check Version of Module 
To check version for all modules we use `npm outdated`. For a specific module `npm outdated packageName`




### The Content Of `Package.json` After Install Module

What is package.json?



The `package.json` file is  probably the most important file in the whole **Node.js** world is created after initialize new project. It holds key details about your app, like its name, version, author, and, most importantly, the list of dependencies (the modules your app needs to run). It not only lists these dependencies but also their specific versions to prevent problems caused by version conflicts.This file is crucial because npm (Node Package Manager) uses it to know which packages to install. When we share our  project on GitHub, we only need to include the `package.json` file. This way, others can install the necessary packages without transferring all the files, making it easier to share and deploy the project.











#### `main` Field
- Specifies the entry point of your application.
```json
"main" : "index.js"
```
> When someone requires your module (require('my-app')), Node.js will look for the file specified in "main". If omitted, it defaults to index.js.

After we install modules what we'll see added to "package.json" are our dependencies the dependency can be :

#### `type` Field
Defines the module system the project uses:
`commonjs`: Traditional Node.js modules (default in older Node.js versions `require` syntax).
`module`: Enables ECMAScript Modules (ESM) with `import/export` syntax.

```json
"type": "module"
```

**Why is this important?**
Determines whether you use `require` or `import` in your code.
Affects file extensions (.mjs for ESM or .cjs for CommonJS).


#### `engines` Field

Specifies the Node.js and npm versions required to run your application. Helps ensure compatibility across environments.

```json
"engines": {
  "node": ">=16.0.0",
  "npm": ">=7.0.0"
}

```
> When someone installs your package, npm will issue a warning if their versions do not match the specified requirements.



#### `Scripts` Field
- **Scripts** are custom commands defined in the `package.json` file that help automate tasks in your project.  
- They're listed under the `"scripts"` section and have a **key-value** format:
  - The **key** is the name of the script (e.g., `"start"`, `"build"`).
  - The **value** is the command that should run (e.g., `"node index.js"`).

 Why Are Scripts Useful?
Scripts make it easier to:
- Standardize common tasks (like starting a server or running tests).
- Run commands with a simple alias instead of typing the full command every time.

 

```json
// package.json
"scripts": {
  "start": "node index.js"
}
```
It means:
- When you run `npm run start` in your terminal, it will execute `node index.js`, starting your app.

Why Use `scripts` on a Server?
- When hosting your app (e.g., on a cloud service), servers often use the `start` script by default to know how to run your application.
- For example, if you host on Heroku or similar platforms, they will automatically run the `npm start` command to launch your app.








#### Production & Development Dependency Fields

- Dependency inside "dependencies" which mean is a **Production Dependency** : a dependency that is a part of the overall application that need to go into production.


- Dependency inside "devDependencies" which mean is a **Development Dependency** : a dependency that is needed just for development. To install dev dependencies we use `npm intall packageName --save-dev or -D` other way it will save it as production dependency by default.




##### Details Of Dependencies And Dev Dependencies(Semantic Versioning)
<!-- https://docs.npmjs.com/about-semantic-versioning -->

when we install a dependency we get it with a specific  number next to it inside our package.json file (e."lodash": "^4.17.21") this number called**semantic versioning number**
1. The First number mean the **Major Version**

2. The 2nd one mean the **Minor version**

3. The 3rd one means the **patch**

and we also have

- **^** which means go a head and allow an **update to the minor version and the patch `1.x.x`** .if needed but don't update the major version cause could have breaking changes to application.

- **~** which mean go ahead and **update the patch version`1.2.x`** but don't update the minor version


- **\*** which mean go ahead and **update everything** all the time use the absolute latest version *by the way that is not safe*



- if we don't have any prefix to the "semantic version number" that mean  **specifically this version and only this version for this project will work**


> With npm if we want to install specific version or different version we use `npm install packageName@specificVersionWeWant` When we dont' specify any version we get the latest version






#### Adding Custom Fields
You can add custom fields to `package.json` for your project’s specific needs.

##### `config` Field
 Used for project-specific configuration:

```js
"config": {
  "port": 3000
}
// to access it in Node.js 
const port = process.env.npm_package_config_port;



```


##### `private` Field
 Prevents your project from being accidentally published to the npm registry:

 ```json
 "private": true

 ```

##### keywords Field
Lists keywords to help others find your project on npm:

```json
"keywords": ["node", "express", "web-app"]

```





### Other files/folders we will see after install Module(package)


 **node modules :** which can be fairly large fairly fast because there is gonna be lot of files and folders here and that because any dependency that we add can pull in other dependencies and that why we don't need to store that on our github so what we should do is always adding `.gitignore` file and inside of it the first thing we should add is node_modules now if we init git and push this to github the node_modules folder would not be included and that's important  because there is alot of data in node_modules.And if you were to clone another repo and it had the package.json but didn't had the node_modules you would get error if you tried to run the project so the first thing we need to do is run `npm install` and it's gonna read package json and go ahead and install node modules you need








## Modules
**Module** : is just a file that exports some code which allow developer to organize  code within their own projects or share code with the world through package manager like `npm` 


### Modules Types 
In JavaScript there are two types of Modules : 
#### CommonJs Modules
CommonJS is mainly used in server-side JS apps with Node, **as browsers don't support the use of CommonJS**.


*In CommonJs*
- `module.exports` is the keyword we use to declare all we want to export from the file.
`module.exports = mod1Function`
<br/>

- If we wanted to export more than one thing from a single module, we can do it like this:
`module.exports = { mod1Function, mod1Function2 }`
<br/>

- `require` is the keyword we use to import everything we want to use from the file that declares and exports it to us.


> As a side comment, Node used to only support CommonJS to implement modules, but nowadays it also supports ESmodules which is a more modern approach. **we can simply enable ESModule by <br/> 1.  changing the file extensions from .js to .mjs. <br/>2. adding a "type: module" field inside the package.json file**  <br/> With this statement we added, Node.js treats all files inside that package as ES modules, and we won’t have to change the file to a .mjs extension

```js
// ALIASES BY ADDING  FUN2
module.exports = {moduleFunction,func2 : moduleFunction2}

```

<br/>

#### EsModules 
is a more modern approach that is currently supported by *browser* and *server-side* apps with Node.

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

| Feature             | CommonJS                    | ES Modules (ESM)              |
| ------------------- | --------------------------- | ----------------------------- |
| Syntax              | `require`, `module.exports` | `import`, `export`            |
| Default export      | `module.exports = value`    | `export default value`        |
| Named export/import | Use properties of exports   | `export` / `import {}`        |
| Import time         | Runtime (dynamic loading)   | Static (compile-time loading) |
| Environment         | Node.js                     | Browsers & modern Node.js     |



### 📊 Key Differences Between CommonJS and ES Modules (With Examples)

| **Feature**          | **CommonJS**                                                                                               | **ES Modules (ESM)**                                                                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Syntax**           | `const lib = require('./lib')`<br>`module.exports = value`                                                 | `import lib from './lib.js'`<br>`export default value`                                                                 |
| **Default Export**   | ``` function add(a, b)  { return a + b; }module.exports = add;```<br>`const add = require('./math');`      | ```export default function add(a, b) { return a + b; }```<br>`import add from './math.js';`                            |
| **Named Export**     | ```exports.add = (a, b) => a + b;exports.sub = (a, b) => a - b;```<br>`const { add } = require('./math');` | ```export const add = (a, b) => a + b;\nexport const sub = (a, b) => a - b;\n```<br>`import { add } from './math.js';` |
| **Multiple Exports** | ```module.exports = { add, sub };```<br>or<br>`exports.a = 1; exports.b = 2;`                              | ```export const a = 1;export const b = 2;```                                                                           |
| **Alias Import**     | Manual alias:<br>`const { add: sum } = require('./math');`                                                 | Built-in alias:<br>`import { add as sum } from './math.js';`                                                           |
| **Alias Export**     | ✅ Supported manually:<br>`module.exports = { sum: add };`                                                  | ✅ Native syntax:<br>`export { add as sum };`                                                                           |
| **Import Timing**    | Runtime (dynamic):<br>Modules are loaded and evaluated when `require()` is called.                         | Static (compile-time):<br>Imports are resolved before execution, enabling tree shaking and better optimization.        |
| **Environment**      | Node.js (default in older versions).                                                                       | Modern browsers and Node.js (when using `"type": "module"` in `package.json`).                                         |

---


---


### Differences between `Dynamic` & `compile-time` Loading.
Dynamic loading and compile-time loading differ in **when and how** modules or resources are loaded into a program. Here’s a breakdown:



####  Dynamic Loading

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



####  Compile-Time Loading

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

| **Aspect**       | **Dynamic Loading**               | **Compile-Time Loading**       |
| ---------------- | --------------------------------- | ------------------------------ |
| **When**         | At runtime                        | At build/compile time          |
| **Flexibility**  | Highly flexible, conditional      | Static, pre-determined         |
| **Performance**  | Might slow runtime execution      | Faster at runtime              |
| **Bundle Size**  | Smaller initial size, grows later | Entire code included upfront   |
| **Tree-Shaking** | Not optimized for tree-shaking    | Optimized with modern bundlers |
| **Use Case**     | On-demand or lazy-loaded modules  | Always-needed modules          |



### Choosing Between the Two
- **Dynamic Loading** is ideal for applications where:
  - Certain features or modules are rarely used.
  - You want to improve initial load performance.
  - The resources are large or optional.

- **Compile-Time Loading** is better for:
  - Core application logic that is always needed.
  - Environments requiring strict static analysis or optimizations.
  - Codebases where predictable module behavior is important.
























## Sync vs Async
<!-- TODO : ADD NOTES ABOUT CALLBACK , PROMISES, ASYNC AWAIT , EVENT LOOP IN JS -->

- **Synchronous**
  -  Run top to bottom, blocking the execution.

  - Next line waits for the previous one to finish.
  
  - Is The way we write a code usually




- **Asynchronous**
  - Code doesn't wait for each other,Non-blocking executing: continue running the rest of the code while handle the long time taking code in another where.









## File System
### Streams & Buffers 
we've seen how node can read data or files from a computer now but some times those files could be very very large and therefore it would *take a long time to read them and we could end up waiting a while to do something with the data before it's even been fully read* now to combat this we could use something knows as `streams` so **by using streams we can start using the data, before it has finished loading(read)**.

so `streams` work in a similar way to real life streams : **imagine we had some kind of huge water basin or a source of water somewhere and then also imagine that we had a pool that needs filling up with water from that basin** 
- now one option would be to get a huge tank  fill it up completely with the full amount of water we need to fill the pool and then deliver it to the pool and empty all of the water in it at once to fill it (which mean that we have to wait a really long time while the tanks fills up initially and then deliver it  to the pull at once )


- the second option is to have  a stream that delivers the water and that way it fills up the pool a little bit at a time but we can start using the pool with a bit of water in it almost straight away 

**So The same logic applies with data** so now imagine we have a huge large data source some kind of huge file and i want to read it we could way until all of it's been read and then do something with it but this could take long time  or *we can pass the data a bit at a time through a stream*  **and this way small chunks of data are packaged up into what's knows as `buffer`. and then sent down the stream every time the buffer fills, so every time we get a new chunk of data from the buffer we can start using it** now we get this in action when we're probably streaming something on Netflix or Youtube where **little bits of data are sent to the browser a bit at a time** so we can start watching straight away without having to wait for the whole video to load initially. 


#### Pipe 
what it is doing is basically opening up the readstream reading data and everytime we get a chunk under the hood its piping that into the write stream 

```js
// We use this approach when working with large files.
// It's better not to load the entire data into memory at once.

const fs = require("fs");

// Create a readable stream from 'lorem.txt'.
// Optional: setting { encoding: "utf8" } makes the chunks automatically readable as strings.
// If you omit it, you would need to use chunk.toString() manually.
const readStream = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

// Create a writable stream to 'new-lorem.md'.
// This immediately creates the file but doesn't write any data yet.
const writeStream = fs.createWriteStream("./files/new-lorem.md");

/*
// Option 1: Manual approach using event listener.
// Listen for 'data' events on the read stream and write each chunk to the write stream.

readStream.on("data", chunk => {
  writeStream.write(chunk);
});
------------
*/

// Option 2: Use pipe() to transfer data from the read stream to the write stream.
// This is a cleaner and more efficient way to accomplish the same task.
readStream.pipe(writeStream);

// The line above means: "Take whatever is being read from the read stream,
// and directly pipe it into the write stream."




```
[ ] Look for Dublex Stream


## Node.js HTTP Server Notes
### Clients & Server 
<!-- TODO : add notes about first 4 min ninja -->




### Creating a server

In nodejs we need to create a server  which lives in the backend of our website and listen for request coming in from the browser and then decide what responses to send to the browser 


#### Commonly Used Properties and Methods

#####  `request` Object

| Property / Method    | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `request.url`        | URL path requested by the client (e.g., `/home`, `/about`) |
| `request.method`     | HTTP method (GET, POST, etc.)                              |
| `request.headers`    | HTTP headers sent with the request                         |
| `request.on('data')` | Listens for data chunks (useful for POST data)             |
| `request.on('end')`  | Triggers once all data is received                         |

---

##### `response` Object

| Property / Method      | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `response.setHeader()` | Sets HTTP headers (e.g., `Content-Type`)       |
| `response.write()`     | Sends content back to the client               |
| `response.end()`       | Ends the response                              |
| `response.statusCode`  | Sets the HTTP status code (e.g., 200, 404)     |
| `response.writeHead()` | Combines status and headers into a single call |


###### Status Codes 
Status Codes describe the type of response sent to the browser and how successful the request was 
✅ HTTP Response Status Codes

- 🔵 1xx – Informational

| Code | Meaning             | Description                                |
| ---- | ------------------- | ------------------------------------------ |
| 100  | Continue            | Request received, continue the process     |
| 101  | Switching Protocols | Server is switching protocols as requested |

---

- 🟢 2xx – Success

| Code | Meaning    | Description                                     |
| ---- | ---------- | ----------------------------------------------- |
| 200  | OK         | Request succeeded and response is sent          |
| 201  | Created    | Resource created successfully                   |
| 202  | Accepted   | Request accepted, processing later              |
| 204  | No Content | Success, but no response body (useful for APIs) |

---

- 🟡 3xx – Redirection

| Code | Meaning           | Description                               |
| ---- | ----------------- | ----------------------------------------- |
| 301  | Moved Permanently | Resource moved to a new URL               |
| 302  | Found (Temporary) | Temporarily redirected to another URL     |
| 304  | Not Modified      | Resource hasn't changed (used in caching) |

---

- 🔴 4xx – Client Errors

| Code | Meaning            | Description                              |
| ---- | ------------------ | ---------------------------------------- |
| 400  | Bad Request        | Server couldn't understand the request   |
| 401  | Unauthorized       | Authentication required                  |
| 403  | Forbidden          | Authenticated but not allowed            |
| 404  | Not Found          | Resource not found                       |
| 405  | Method Not Allowed | HTTP method not supported                |
| 408  | Request Timeout    | Client took too long to send the request |

---

- 🔴 5xx – Server Errors

| Code | Meaning               | Description                               |
| ---- | --------------------- | ----------------------------------------- |
| 500  | Internal Server Error | Generic error from the server             |
| 501  | Not Implemented       | Server doesn't support the request method |
| 502  | Bad Gateway           | Invalid response from the upstream server |
| 503  | Service Unavailable   | Server is temporarily down or overloaded  |

---







#### Localhost & Port Numbers 

##### what is localhost ?
localhost is like a domain name that we'd use in the web a bit like google.com for example but this one is one that takes us to a very specific IP address called a `loop back IP address` now this IP address is `127.0.0.1` and it points directly back to our computer. So that means that when we're connecting to localhost domain in the browser the browser in actually connecting back to our own computer which is then acting as  a host for our website. 

##### Port Numbers 
<!-- The port number represents a specific  channel gateway or port on our computer that a certain bit of software our server should communicate through  -->
A port number is like a specific channel or doorway on your computer that software (like a server) uses to send, receive, and keep information separate from other programs. It tells the computer which program should handle the incoming or outgoing data.

> Port numbers a re like 'doors' into a computer

now our server is also need its own port number to communicate through, the common port number for  local web dev is '3000'  as long as our port number we choose doesn't calsh with a port number being used by another program is fine to use so when we use the "localhost" we should type the port number after a colon in the address bar `localhost:3000`


#### Redirecting 

Absolutely! Here's a **simpler and clearer version** of your explanation, keeping the idea intact:

---

Let's say I had a webpage at the URL **`/about-me`**, but later I decided to change it to **`/about`**. That’s no problem on my own website — I can update all my links to point to `/about`.

But here's the issue:

Other websites might still be linking to **`/about-me`** — maybe because my site is popular and a lot of people shared that old link.

So now, if someone clicks on those old links, they’ll get a **404 (Not Found)** error because that page no longer exists.

Instead of showing an error, it’s better if I can **detect requests to `/about-me` and redirect them to `/about`**. That way, no visitors are lost, and they still end up on the correct page.
































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






























