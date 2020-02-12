let http = require("http");
let server = http.createServer(newClientCallback);
server.listen(8080);



function newClientCallback(requestClient, responseToClient) {
  responseToClient.writeHead(200, { "content-type": "text/html" });

  //node as client

  let rawData = "";

  let requestToSend = {
    host: "api.irail.be",
    port: 80,
    path: "/liveboard/?id=BE.NMBS.008812005&lang=fr&format=json"
  };

  http.get(requestToSend, receiveResponseCallback);

  function receiveResponseCallback(responseFromServer) {
    responseFromServer.on("data", chunk => {
      rawData += chunk;
    });
    responseFromServer.on("end", () => {
      let objJson = JSON.parse(rawData);
      function ConvertTime(timestamp) {
        // let timestamp = objJson.timestamp;
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();

        let formattedTime =
          hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        return formattedTime;
      }

     
      let htmlToSend = "<html><body style='padding-left: 300px;'>";

      for (let i = 0; i < objJson.departures.departure.length; i++) {
        let Time = ConvertTime(objJson.departures.departure[i].time);
        let Platform = objJson.departures.departure[i].platform;
        let Delay = objJson.departures.departure[i].delay;
        let Station = objJson.departures.departure[i].station ;
        htmlToSend += "<h3><div style='color: red;'>Destination: </div>" + Station + " <div style='color: green;'>Depart: </div>"+ Time + " <div style='color: blue;'>Platform: </div>" + Platform + "</h3>";
      }
      htmlToSend += "</body></html>";
      responseToClient.end(htmlToSend);
    });
  }

  //response to client
  
}
