const https = require('https');
const fs = require('fs');

const server = https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('ㅅ 비밀키 경로'),
        fs.readFileSync('도메인 비밀키 경로')
    ],

}, async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    const data = await fs.readFile('../server.html');
    return res.end(data);
}).listen(443, () => {
    console.log('443 포트 대기중');
});
