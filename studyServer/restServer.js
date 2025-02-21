const http = require('http');
const {promises: fs} = require("fs");

const server = http.createServer();

server.listen(3001, () => {
    console.log('Server is listening on port 3001');
});

const users = {};
server.on('request', async (req, res) => {
    try {

        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                const data = await fs.readFile('../server.html');
                return res.end(data);
            } else if (req.url === '/write') {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                const data = await fs.readFile('../write.html');
                return res.end(data);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                return res.end('NOT FOUND');
            }
        } else if (req.method === 'POST') {
            if (req.url === '/write') {

                let body = '';

                req.on('data', (data) => {
                   body += data;
                });

                return req.on('end', () => {
                    console.log('payload: ', body);

                    const { name } = JSON.parse(body);
                    users['idx'] = Date.now();
                    users['name'] = name;
                    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

                  res.end(JSON.stringify(users));
                });


            }
        }

    } catch (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(err.message);
    }
});