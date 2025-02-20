const fs = require('fs');
const writeStream = fs.createWriteStream('../writeme.txt');

writeStream.on('finish', () => {
   console.log('파일 쓰기 완료');
});

writeStream.write('글 추가 되나? \n');
writeStream.write('되겠나?');

writeStream.end();