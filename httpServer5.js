let http = require('http');
let url = require('url');
let server = http.createServer(newClientCallback);
server.listen(8080);

function newClientCallback (request, response) {
    response.writeHead(200,  {'content-type' : 'text/json'});
    if(url.parse(request.url).pathname == '/user') {
        let url_parts = url.parse(request.url, true);
        let reponseToSend ={};
        let name = url_parts.query.name;
        reponseToSend.Name= name;
        let symbol = ["a", 1 , "v", 8, "o", 0, "j", "g", 5, "t", "n", 2];
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
          let password='';
          let i = 0;
          while(i < 11){
              password += symbol[getRandomInt(12)];
              i++;
          }
          console.log(password);
        
        reponseToSend.Password= password;
        response.end(JSON.stringify(reponseToSend));

    }
    
};