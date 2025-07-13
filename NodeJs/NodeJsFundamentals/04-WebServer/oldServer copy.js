// Simple Web Server using Node.js (No Framework)

// Core Modules
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const logEvents = require('./logEvents'); // Custom logging module (not shown)
const EventEmitter = require('events');

// Custom Event Emitter
class Emitter extends EventEmitter {}
const myEmitter = new Emitter();

// Server Port (uses environment variable or defaults to 3500)
const PORT = process.env.PORT || 3500;

/**
 * Serve a requested file
 * @param {string} filePath - Path to the file
 * @param {string} contentType - MIME type of the file
 * @param {http.ServerResponse} response - HTTP response object
 */
const serveFile = async (filePath, contentType, response) => {
  try {
    const rawData = await fsPromises.readFile(
      filePath,
      !contentType.includes('image') ? 'utf-8' : ''
    );

    const data = contentType === 'application/json' ? JSON.parse(rawData) : rawData;

    response.writeHead(filePath.includes('404.html') ? 404 : 200, {
      'Content-Type': contentType,
    });

    response.end(
      contentType === 'application/json' ? JSON.stringify(data) : data
    );
  } catch (err) {
    console.error('Error reading file:', err);
    response.statusCode = 500;
    response.end();
  }
};

// Create and configure the HTTP server
const server = http.createServer((req, res) => {
  console.log(`${req.method} request for ${req.url}`);

  const extension = path.extname(req.url);

  // Determine content type based on file extension
  let contentType;
  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.txt':
      contentType = 'text/plain';
      break;
    default:
      contentType = 'text/html'; // Default to HTML
  }

  // Determine file path to serve
  let filePath =
    contentType === 'text/html' && req.url === '/'
      ? path.join(__dirname, 'views', 'index.html')
      : contentType === 'text/html' && req.url.endsWith('/')
        ? path.join(__dirname, 'views', req.url, 'index.html')
        : contentType === 'text/html'
          ? path.join(__dirname, 'views', req.url)
          : path.join(__dirname, req.url);

  // Add ".html" extension if not present and it's an HTML file
  if (!extension && !req.url.endsWith('/')) {
    filePath += '.html';
  }

  // Check if file exists
  fs.existsSync(filePath)
    ? serveFile(filePath, contentType, res)
    : handle404Redirects(filePath, res);
});

/**
 * Handle redirects or 404 errors
 * @param {string} filePath - Requested path
 * @param {http.ServerResponse} res - HTTP response object
 */
function handle404Redirects(filePath, res) {
  const base = path.parse(filePath).base;

  switch (base) {
    case 'old-page.html':
      res.writeHead(301, { Location: '/new-page.html' });
      res.end();
      break;
    case 'www-page.html':
      res.writeHead(301, { Location: '/' });
      res.end();
      break;
    default:
      serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
  }
}

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
