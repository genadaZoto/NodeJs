let express = require("express");
const app = express();


app.use('/', express.static(__dirname+"/zipExpress"));
app.listen(8000);

app.get('/zipcode', function(request, response){
    response.setHeader('Content-Type', 'text/html');
    if(request.query.city =="Bruxelles"){
        response.send("<body>1000 Bruxelles </body>");
    }
            
});