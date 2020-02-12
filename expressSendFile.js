let express = require("express");
const app = express();

app.listen(8000, function() {
  console.log("hello");
});

app.get("/", function(request, response) {
  response.setHeader("Content-Type", "text/html");
  response.sendFile(__dirname +"/" +  "index.html");
});


