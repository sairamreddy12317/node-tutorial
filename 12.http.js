const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Welcome to home page")
    }else if(req.url=="/about"){
        res.end("wlecome to about page")
    }else {
        res.end(`<h1>opps!</h1>
        <p>We cant see the page you are lookimng for</p>
        <a href="/">Back Home</a>
        `)
    }
});

server.listen(5000)