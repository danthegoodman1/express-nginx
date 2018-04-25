const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

startExpress = (host, port) => {
    app = express();
    app.get('/', (req, res) => {
        console.log(`Request from ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`); // Either NGINX forward or just normal ip
        res.status(200).send(`Hello from nginx loadbalancer on port ${port}`);
    });
    app.listen(port, host, function(){
        console.log(`Started listneing at ${host} on port ${port}`);
    });
}

startExpress(HOST, PORT);
startExpress(HOST, PORT+1);
startExpress(HOST, PORT+2);
