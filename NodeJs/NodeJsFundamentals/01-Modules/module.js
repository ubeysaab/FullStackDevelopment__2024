const moduleFunction = () => console.log('module is alive!')



const moduleFunction2 = () => console.log("hey im 2nd function");


// TODO : ALIASES BY ADDING  FUN2:
module.exports = {moduleFunction,func2 : moduleFunction2}
