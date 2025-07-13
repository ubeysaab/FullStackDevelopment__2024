const fs = require("fs");

if (!fs.existsSync("./newDir")) {
  fs.mkdir("./newDir", (err) => {
    if (err) throw err;
    console.log("directory created ");
  });
}

console.log("wait  a minute");

setTimeout(() => {
  if (fs.existsSync("./newDir")) {
    fs.rmdir("./newDir", (err) => {
      if (err) throw err;
      console.log(" dir removed ");
    });
  }
}, 2000);
