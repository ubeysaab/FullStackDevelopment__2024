const path = require('path')
const fsPromise = require('fs/promises')
const http = require('http')
const fs = require('fs')


async function CheckIfFileIsExistAndRead(requestUrl) {
  let resStatus;
  if (requestUrl == '/') requestUrl = 'index';

  let filePath = path.join(__dirname, `./Views/${requestUrl}.html`)
  try {
    if (fs.existsSync(filePath)) {

      return await ReadFile(filePath, 200)
    } else {
      filePath = path.join(__dirname, '/Views/404.html')
      return await ReadFile(filePath, 404)
    }

  } catch (err) {
    console.log(err)
  }

}


async function ReadFile(filePath, resStatus) {

  let fileData = await fsPromise.readFile(filePath, { encoding: "utf-8" })
  return [fileData, resStatus]
}


const server = http.createServer(async (req, res) => {
  const data = await CheckIfFileIsExistAndRead(req.url)
  res.statusCode = data[1]
  res.end(data[0])
})


server.listen(3000, () => {
  console.log('Sever is Running on port 3000')
})