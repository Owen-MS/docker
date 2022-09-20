const http = require('node:http');
const fs = require('node:fs');

// const html = `<!DOCTYPE html> // 1、使用模版字符串
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title></title>
// </head>
// <body>
//   hello, shanyue.
// </body>
// </html>`
// const html = fs.readFileSync('./index.html'); // 2、直接读文件字符串
const server = http.createServer((req, res) => {
  fs.createReadStream('./index.html').pipe(res); // 3、使用流读取字符串
})
server.listen(3000, () => {
  console.log('listening 3000')
})
