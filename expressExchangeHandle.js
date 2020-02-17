let express = require("express");
const app = express();


app.use('/', express.static(__dirname+"/exchangeExpress"));
app.listen(8000);

app.get('/exchange', function(request, response){
    response.setHeader('Content-Type', 'text/html');
    let money = request.query.money;
    
    response.send("<body>" + money * 0.91 + "</body>");
          
});