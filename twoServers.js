// Require the HTTP node package
var http = require("http");

//define port that the server will run on
var PORT1 = 7000;
var PORT2 = 7500

// function that will handle requests
function handleRequest1(request, response) {
	response.end("It Works!! Path Hit: " + request.url)
}

function handleRequest2(request, response) {
	response.end("Something bad about you " + request.url)
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {
	console.log("Server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function() {
	console.log("Server listening on: http://localhost:%s", PORT2);
});
