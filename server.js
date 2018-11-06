
const http = require("http");
const user = require('./facts');

const onRequest = (request, response) => {
let randomValue = Math.floor(Math.random() * 4);
response.writeHead(200, { "Content-type": "text/plain" });
response.write(`${user.fact[randomValue]}` );
response.end();
}

http.createServer(onRequest).listen(3000);