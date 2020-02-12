let express = require("express");
const app = express();


app.use('/', express.static(__dirname+"/wwwroot"));
app.listen(8000);
