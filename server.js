// :-)
// 5x testováno :-)
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(handleRequest(req.url));
  res.end();
}).listen(8000);

function handleRequest(url) {
  if (url === '/') {
    url = '/index.html';
  }
  url = url.substring(1, url.length);
  if (!fs.existsSync(url)) {
    return `Error 404: File ${url} not found :(`;
  }
  return fs.readFileSync(url);
}