// app.js
const http = require('http');
const currentDateTime = require("./myFirstModule");
const uc = require("upper-case");


http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/html' });
const message = uc.upperCase("hello world");
  response.end(message + currentDateTime.myDateTime());
}).listen(8080);

console.log("Application running on port 8080");

