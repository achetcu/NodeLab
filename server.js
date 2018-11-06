// use math Random whole number
// use index to pick from an array
const http = require("http");
const user = require('./facts');

const onRequest = (request, response) => {
response.writeHead(200, { "Content-type": "text/plain" });
response.write(`${user.randomValue}` );
response.end();
}

http.createServer(onRequest).listen(3000);