import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.method == 'GET' && req.url == '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')

    const readStream = fs.createReadStream('./src/pages/index.html')
    readStream.pipe(res);

    res.on('finish', () => {
      res.end();
    })
  }

  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain')
    res.end();
  }
})

server.listen(3000, () => {
  console.log('Server has been ran');
})