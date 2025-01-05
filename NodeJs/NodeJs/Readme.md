<details>
  <summary><strong>Node Js</strong></summary>
  <ul>
    <li><a href="#npmnode-package-manager">NPM(Node Package Manager)</a>
      <details>
        <!-- <summary>Subsections</summary> -->
        <ul>
          <li><a href="#initializing">Initializing</a></li>
          <li><a href="#set-defaults">Set Defaults</a></li>
          <li><a href="#checkget-defaults">CHECK(Get) DEFAULTS</a></li>
          <li><a href="#delete-defaults">DELETE DEFAULTS</a></li>
          <li><a href="#modules">Modules</a>
            <details>
              <!-- <summary>Modules Subsections</summary> -->
              <ul>
                <li><a href="#install-modulepackage">Install Module(package)</a>
                  <ul>
                    <li><a href="#using-module">Using Module</a></li>
                  </ul>
                </li>
                <li><a href="#globally-install">Globally Install</a></li>
                <li><a href="#update-module">Update Module</a></li>
                <li><a href="#uninstall-module">Uninstall Module</a></li>
                <li><a href="#list-modules">List Modules</a></li>
                <li><a href="#check-version-of-module">Check Version of Module</a></li>
              </ul>
            </details>
          </li>
          <li><a href="#the-content-of-packagejson-after-install-module">The Content Of <code>Package.json</code> After Install Module</a>
            <details>
              <summary>Package.json Fields</summary>
              <ul>
                <li><a href="#main-field"><code>main</code> Field</a></li>
                <li><a href="#type-field"><code>type</code> Field</a></li>
                <li><a href="#engines-field"><code>engines</code> Field</a></li>g
                <li><a href="#scripts-field"><code>Scripts</code> Field</a></li>
                <li><a href="#production--development-dependency-fields">Production &amp; Development Dependency Fields</a>
                  <ul>
                    <li><a href="#details-of-dependencies-and-dev-dependenciessemantic-versioning">Details Of Dependencies And Dev Dependencies(Semantic Versioning)</a></li>
                  </ul>
                </li>
                <li><a href="#adding-custom-fields">Adding Custom Fields</a>
                  <ul>
                    <li><a href="#config-field"><code>config</code> Field</a></li>
                    <li><a href="#private-field"><code>private</code> Field</a></li>
                    <li><a href="#keywords-field"><code>keywords</code> Field</a></li>
                  </ul>
                </li>
              </ul>
            </details>
          </li>
          <li><a href="#other-filesfolders-we-will-see-after-install-modulepackage">Other files/folders we will see after install Module(package)</a></li>
        </ul>
      </details>
    </li>
  </ul>
</details>

# Node Js



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













