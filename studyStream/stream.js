const fs = require('fs');
const readStream = fs.createReadStream('../readme.txt', { highWaterMark: 16 });

const data = [];
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data :', chunk , chunk.length);
});

readStream.on('end', () => {
   console.log('end: ', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
   console.log('error: ', err);
});

// 버퍼 보다 메모리를 아낄 수 있다. 대용량 파일서버를 할때는 스트림 방식이 필수다.