let http = require('http');
let rawData= "";

let requestToSend = {
    "host": "api.irail.be",
    "port": 80,
    "path": "/liveboard/?id=BE.NMBS.008812005&lang=fr&format=json"
};

http.get(requestToSend , receiveResponseCallback);
   

function receiveResponseCallback (responseFromServer) {
    responseFromServer.on('data', (chunk) => { rawData += chunk; }); 
    responseFromServer.on('end', () => {
        let objJson = JSON.parse(rawData);
        function ConvertTime(timestamp) {
            // let timestamp = objJson.timestamp;
        let date = new Date (timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();

        let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
        }
 

        for(let i=0; i< objJson.departures.departure.length; i++) {
            
            let time= ConvertTime(objJson.departures.departure[i].time )
            let platform = objJson.departures.departure[i].platform; 
            console.log(objJson.departures.departure[i].station + '| ' + time + '| Numero platform: '+ platform);
           
        }
       
    });
}




