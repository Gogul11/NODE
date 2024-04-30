const http = require('http');

http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write(`<h1>This is the home page</h1>`)
        res.end()
    }
    else if(req.url === '/next'){
        res.write(`<h1>This is the next page</h1>`)
        res.end()
    }
else{
        res.write(`<h2>Something went wrong</h2>`)
        res.end()
    }    
}).listen(6969);