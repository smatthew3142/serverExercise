

var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;


function handleRequest1(request, response) {
 
  response.end("Unicorns & Mermaids");
}


function handleRequest2(request, response) {
 
  response.end("Trolls & Orcs");
}


var server = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);



server.listen(PORT1, function() {

  console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {

  console.log("Server listening on: http://localhost:" + PORT2);
});
