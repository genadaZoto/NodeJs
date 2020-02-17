let express = require("express");
const app = express();
app.use('/', express.static(__dirname+"/zipExpress"));
app.listen(8000);
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost: 27017";


app.get('/Cities', function(request, response){
    response.setHeader('Content-Type', 'text/json');
  
   MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err, dbMongo) {
      console.log("connected");
      const dbZipCode= dbMongo.db("ZipCode");
      dbZipCode.collection("ZipofCity").find({}, {projection: { city: 1, _id: 0 }}).toArray( function(err, result){
          response.send(result); 
          dbMongo.close();
      });
    }
  );
           
});