let express = require("express");
const app = express();
app.use('/', express.static(__dirname+"/zipExpress"));
app.listen(8000);
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost: 27017";


app.get('/Books', function(request, response){
    response.setHeader('Content-Type', 'text/json');
  
   MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err, dbMongo) {
      console.log("connected");
      const dbLibrary = dbMongo.db("Library");
      dbLibrary.collection("Books").find({}).toArray( function(err, result){
          console.log(result[1].author[1]);
          response.send(result); 
          dbMongo.close();
      });
    }
  );
           
});