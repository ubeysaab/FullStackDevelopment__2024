// Creating our modules 


const add=(a,b)=>(a+b)
const sub=(a,b)=>a-b
const mul=(a,b)=>a*b
const div=(a,b)=>a/b

// common way to export all the functions that we defined
module.exports={add,sub,mul,div}






// or we can export them  like this
/*
exports.const add=(a,b)=>(a+b)
exports.const sub=(a,b)=>a-b
exports.const mul=(a,b)=>a*b
exports.const div=(a,b)=>a/b
 */