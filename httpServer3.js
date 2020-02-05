let http = require('http');
let url = require('url');
let server = http.createServer(newClientCallback);
server.listen(8080);

function newClientCallback (request, response) {
    response.writeHead(200,  {'content-type' : 'text/json'});
    if(url.parse(request.url).pathname == '/zipcode') {
        let url_parts = url.parse(request.url, true);
        let nameToSend ={};
        let name = url_parts.query.city;
        nameToSend.City = name;
        if(name === "Bruxelles") nameToSend.ZipCode = 1000;
        if(name === "Schaerbeek") nameToSend.ZipCode = 1030;
        response.end(JSON.stringify(nameToSend));

    }
    
};
