
let http = require('http');
let server = http.createServer(newClientCallback);
server.listen(8080);

console.log('server is running!');

function newClientCallback (request, response) {
    console.log('New Client Connection');
    response.writeHead(200, {'content-type' : 'text/json'});
    let timeToSend ={};
    let today = new Date();
    timeToSend.hour = today.getHours(); 
    timeToSend.min = today.getMinutes(); 
    
    response.end(JSON.stringify(timeToSend));
    
};
