const fs = require("fs")
const path = require('path')



console.log(__dirname)
console.log(__filename)

// https://nodejs.org/en/learn/manipulating-files/working-with-file-descriptors-in-nodejs


function readingFileAndResponseIt(requestUrl){
  if(requestUrl =='/')
  {
    requestUrl='hello'
  }
    try {
      const fd = fs.openSync(path.join(__dirname,`${requestUrl}.html`));
      if(fd){
        const file=fs.readFileSync('./hello.html',{encoding:"utf8"})
    // ! To get the output in string formation we should use 
        // console.log(file.toString())
      //! or we can add {encoding:utf8}
        return file
      
      }
    } catch (err) {
      console.error(err);
    }
  
}



