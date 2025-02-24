const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log("11 들어 갑니다.")
  next();
},(req, res, next) => {
  console.log("22 들어 갑니다.")
  next();
},(req, res, next) => {
  console.log("33 들어 갑니다.")
  next();
  // throw new Error('시스템 에러');
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

app.use((err, req, res, next) => {
  console.error(err);
  res.send('에러 났습니다. ㅎㅎ');
})

app.listen(app.get('port'), () => {
  console.log('서버 실행');
})