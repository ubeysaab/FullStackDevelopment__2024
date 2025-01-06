// ------CommonJs---------
// const {moduleFunction,moduleFunction2} = require('./module.js')//CommonJs
// ---- ESModules ------
// import { hello ,why} from "./ESmodule.js"//ESModule
// --------ESModules import renaming--------
// import ready, { hello as hf, why as wf } from './ESmodule.js'

// -- usign renaming in commonjs
const {func2} = require("./module.js")



const mainFunction = () => {
  console.log('Im the main function')
  // moduleFunction()// commonJs
  // moduleFunction2()// commonJs
  // hello()//ES
  // why()//ES
  // hf()
  // wf()
  // ready()
  func2()
}

mainFunction()
// const why = document.getElementById('why')
// const hello = document.getElementById('hello')

// isRolling.addEventListener('click',wf)
// isAlive.addEventListener('click',hf)
