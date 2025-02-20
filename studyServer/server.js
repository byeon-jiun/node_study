const http = require('http');
const fs = require('fs').promises;

const server = http.createServer();

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


server.on('request', async (req, res) => {
    try {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        const data = await fs.readFile('../server.html');
        res.end(data);
    } catch (err) {
        console.log(err);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(err.message);
    }
});



server.on('error', (err) => {
   console.log(err);
});