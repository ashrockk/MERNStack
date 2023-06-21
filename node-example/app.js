// app.js
const http = require('http');
const currentDateTime = require("./myFirstModule");

http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('Hello World!' + currentDateTime.myDateTime());
}).listen(8080);

console.log("Application running on port 8080");

