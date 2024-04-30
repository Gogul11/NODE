const http = require('http')
const fs = require('fs')

const server = http.createServer(
    (req, res) => {
        if(req.url === '/')
        {
            fs.readFile('./design/signin.html',(err, data) => {
                if(err){
                    res.end('<h1>something went wrong</h1>')
                }
                res.writeHead(200, {'content-type' : 'text/html'})
                res.write(data)
                res.end()
            })
        }
        else if(req.url === "/signin.css")
        {
            fs.readFile("./design/signin.css", (err, data)=>{
                if(err){
                    res.end('<h1>something went wrong</h1>')
                }
                res.writeHead(200, {"content-type" : "text/css"})
                res.write(data)
                res.end()
            })
        }
        else if(req.url === "/login.html"){
            fs.readFile("./design/login.html", (err, data) =>{
                if(err){
                    res.end("<h1>Some thing went wrong<h1>")
                }
                res.writeHead(200, {"content-type" : "text/html"})
                res.write(data)
                res.end()
            })
        }
        else if(req.url === "/login.css"){
            fs.readFile("./design/login.css", (err, data) => {
                if(err){
                    res.end("<h1>Can't able to load this page</h1>")
                }
                res.writeHead(200, {"content-type" : "text/css"})
                res.write(data)
                res.end()
            })
        }
    }
)

server.listen(6969);