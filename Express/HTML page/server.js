const express = require("express");
const path = require("path")
const app = express();

app.use(express.static('./public'))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/signin.html'))
})


app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/login.html'))
})

app.get("*", (req, res) => {
    res.send(`<div>
                <h3>Error: 404</h3>
                <h4>Page not found</h4>
                <h4>Please check the path</h4>
            </div>`)
})

app.listen(3000)