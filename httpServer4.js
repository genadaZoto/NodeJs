let http = require('http');
let url = require('url');
let server = http.createServer(newClientCallback);
server.listen(8080);

function newClientCallback (request, response) {
    response.writeHead(200,  {'content-type' : 'text/json'});
    if(url.parse(request.url).pathname == '/convertiseur') {
        let url_parts = url.parse(request.url, true);
        let reponseToSend ={};
        let dollar = url_parts.query.montant;
        reponseToSend.Dollar = dollar;
        let currency = url_parts.query.currency;
        if(currency === "euro") reponseToSend.Currency = dollar * 0.91;
        
    
        response.end(JSON.stringify(reponseToSend));

    }
    
};