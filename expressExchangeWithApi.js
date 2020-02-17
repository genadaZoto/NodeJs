//pour envoyer une reponse au client

let express = require("express");
const app = express();

app.use('/', express.static(__dirname+"/exchangeExpress"));
app.listen(8000);


//pour la requete vers l'API avec http qui peux faire le client
let https = require('https');
let rawData= "";
let objJson = {} ;
let requestToSend = {
    "host": "api.exchangeratesapi.io",
    "port": 443,
    "path": "/latest"
};

https.get(requestToSend , receiveResponseCallback);


function receiveResponseCallback (responseFromServer) {
    responseFromServer.on('data', (chunk) => { rawData += chunk; }); 
    responseFromServer.on('end', () => {
        objJson = JSON.parse(rawData);
        //console.log(objJson.rates);
        //rate = objJson.rates.USD;
    });
}

app.get('/exchange', function(request, response){
    response.setHeader('Content-Type', 'text/html');
    let money = request.query.money;
    value = request.query.value;
    rate = parseFloat(objJson.rates[value]);
    response.send("<body>" + money * rate + "</body>");
          
});