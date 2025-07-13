const fsPromises = require('node:fs/promises')
const http = require('http')
const path = require("path")

async function openFileWithReadCallBack(requestUrl) {
  if (requestUrl == "/") requestUrl = 'index';

  try {
    // Reading file asynchronously
    const filedata = await readFile(requestUrl);
    return filedata; // Return file content after resolving promise
  } catch (error) {
    console.error("Error reading file:", error);
    return await readFile('404'); // Return the 404 page content if there's an error
  }
}

async function readFile(requestUrl) {
  // Try to read the requested file
  try {
    const filePath = path.join(__dirname, `/Views/${requestUrl}.html`);
    const filedata = await fsPromises.readFile(filePath, { encoding: "utf8" });
    return filedata;
  } catch (error) {
    console.error("Error reading file:", error);
    const filePath = path.join(__dirname, `/Views/404.html`);
    const filedata = await fsPromises.readFile(filePath, { encoding: "utf8" });
    return filedata;
  }
}

const server = http.createServer(async (req, res) => {
  const file = await openFileWithReadCallBack(req.url);
  res.setHeader('Content-Type', 'text/html');
  res.end(file); // Send the resolved file data
});

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
});
