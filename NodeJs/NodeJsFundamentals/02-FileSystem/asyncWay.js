const fsPromsis = require("fs").promises;

fsPromsis.writeFile("./files/starter.txt", "hello my name is obai ");

let createFile = async () => {
  try {
    let data = await fsPromsis.readFile("./files/starter.txt", {
      encoding: "utf8",
    });
    console.log(data);
    fsPromsis.unlink("./files/starter.txt");
    // if you forget the extension of file you will get error
    await fsPromsis.writeFile("./files/newAsync.txt", data);
    await fsPromsis.appendFile(
      "./files/newAsync.txt",
      "\n\n nice to meet you "
    );
    await fsPromsis.rename(
      "./files/newAsync.txt",
      "./files/newAsyncRenamed.txt"
    );
    let newData = await fsPromsis.readFile("./files/newAsyncRenamed.txt", {
      encoding: "utf8",
    });
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
};

createFile();
