let express = require("express");
const app = express();

app.listen(8000, function() {
  console.log("hello");
});

app.get("/", function(request, response) {
  response.setHeader("Content-Type", "text/html");
  response.send("<strong> Hello</strong>");
});

app.get("/WhatTimeIsIt", function(request, response) {
  response.setHeader("Content-Type", "text/json");

  let timeToSend = {};
  let today = new Date();
  timeToSend.hour = today.getHours();
  timeToSend.min = today.getMinutes();
  response.send(JSON.stringify(timeToSend));
});
