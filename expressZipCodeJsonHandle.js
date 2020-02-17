let express = require("express");
const app = express();
let filestream = require('fs');
let fileContent = filestream.readFileSync('code-postaux-belge.json');
let zipCodeJSON = JSON.parse(fileContent);

app.use('/', express.static(__dirname+"/zipExpress"));
app.listen(8000);

app.get('/zipcode', function(request, response){
    response.setHeader('Content-Type', 'text/json');
    let name = request.query.city;
    let nameToSend= {};

    // for( let i = 0; i< zipCodeJSON.length; i++) {
    //     if(zipCodeJSON[i].city === name) {
    //      nameToSend.ZipCode = zipCodeJSON[i].zip;
    //     }
    // }

    
    //methode 2 avec filter
    const arrayJson = zipCodeJSON.filter( obj => name == obj.city)
    nameToSend.Zip = arrayJson[0].zip;
 
    response.send(JSON.stringify(nameToSend));       
})