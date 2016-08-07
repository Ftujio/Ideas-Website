var http = require('http');
var fs = require('fs');

function noPageErr(response){
	response.writeHead(404, {"Context-Type": "text/plain"});
	response.write("Error 404: No such page!");
	response.end();
}

function onRequest(request, response){
	if(request.method == 'GET' && request.url == '/'){
		response.writeHead(200, {"Context-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(response);
	} else {
		noPageErr(response);
	}
}

http.createServer(onRequest).listen(8888);	
console.log("Server is now running....");