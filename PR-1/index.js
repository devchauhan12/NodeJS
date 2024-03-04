const http = require('http')
// const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
    // let pathname = url.parse(req.url).pathname;
    if (req.url == "/") {
        res.end('Home Page')
    } else if (req.url == '/about') {
        fs.readFile('about.txt', 'utf-8', (err, data) => {
            console.log(req.url , data)
            // console.log(data)
            res.end(data);
        });
    } else if (req.url == '/product') {
        fs.readFile('product.txt', 'utf-8', (err,data) => {
            res.end(data);
        });
    } else if (req.url == '/contact') {
        fs.readFile('contact.txt', 'utf-8', (err,data) => {
            res.end(data);
        });
    } else {
        res.write('Error 404!')
    }
    res.end()
}).listen(8000)
console.log("server is running at 8000")