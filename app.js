const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log("다들어 갑니다.")
  next();
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'server.html'));
})

app.get('/write', (req, res) => {
  res.sendFile(path.join(__dirname, 'write.html'));
})

app.get('/a/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
})

app.listen(app.get('port'), () => {
  console.log('서버 실행');
})