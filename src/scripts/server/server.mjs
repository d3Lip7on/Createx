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

  else if (req.method == 'POST' && req.url == '/'){
    if (req.headers['content-type'] == 'application/x-www-form-urlencoded'){
      const data = '';
      req.on('data', (chunk) => {
        data += chunk.toString();
      })
      req.on('end', () => {
        console.log(data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end();
      })
    }
  }

  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain')
    res.end();
  }
})

server.listen(5000, () => {
  console.log('Server has been ran');
})