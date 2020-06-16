const http = require('http');

var profile = {
  "name" : "haefeli",
  "age" : "21",
  "kg" : "haisys"
}

var server = http.createServer((req,res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.write(JSON.stringify({profile}));
  res.end();
});

const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port);
