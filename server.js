const http = require('http');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    hostname = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
})
;

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
})
;
