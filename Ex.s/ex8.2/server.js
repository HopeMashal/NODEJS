const http = require('http');
const fs = require('fs');
const path = require('path');

const httpServer = http.createServer((req, res) => {
  if (req.url === '/') {
      sendres('index.html', 'text/html', res);
  } else if (req.url === '/raw-html') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Welcome!</h1>');
      res.end();
  } else if (req.url === '/users') {
      sendres('users.json', 'application/json', res);
  } else if (req.url === '/index.css') {
      sendres('index.css', 'text/css', res);
  } else if (req.url === '/index.js') {
      sendres('index.js', 'text/javascript', res);
  }
});

function sendres(url, contentType, res) {
    let file = path.join(__dirname, url);
    fs.readFile(file, (err, content) => {
        if (!err) {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(content);
            res.end();
            console.log(`res: ${file}`);
        }
    });
}

httpServer.listen(3001, () => {
    console.log('Server is up on port 3001');
});