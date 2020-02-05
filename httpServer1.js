let http = require('http');
let server = http.createServer(newClientCallback);
server.listen(8080);

console.log('server is running!');

function newClientCallback (request, response) {
    console.log('New Client Connection');
    // console.log(request.url);
    response.writeHead(200, {'content-type' : 'text/json'});
    let lang = request.headers["accept-language"].substring(0,2);
    // console.log(lang);
    // if(lang === "en"){
    //     response.end("<h1>Hiiii!</h1>");
    // }
    // else{
    //     response.end("<h1>Bonjour!</h1>");
    // }

    response.end('{"name":"Genada"}');
    
};

