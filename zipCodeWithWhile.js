let http = require('http');
let url = require('url');
let filestream = require('fs');
let fileContent = filestream.readFileSync('code-postaux-belge.json');
let zipCodeJSON = JSON.parse(fileContent);


let server = http.createServer(newClientCallback);
server.listen(8080);

console.log("Test : http://localhost:8000/zipCode?city=Bruxelles");

function newClientCallback (request, response) {
    response.writeHead(200,  {'content-type' : 'text/json'});
    if(url.parse(request.url).pathname == '/zipcode') {
        let url_parts = url.parse(request.url, true);
        let nameToSend ={};
        let name = url_parts.query.city;
        nameToSend.City = name;
        
        let i = 0;
        while(zipCodeJSON[i].city !== name && i< zipCodeJSON.length) {
            i++;
        }
        if (i== zipCodeJSON.length) nameToSend.ZipCode ='Not found!'; 
        else nameToSend.ZipCode =zipCodeJSON[i].zip;

        response.end(JSON.stringify(nameToSend));
    }  
};