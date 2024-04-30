const express = require('express');
const app = express();

app.get("/", (req, res)  => {
    res.status(200).send(`<h1>Hello world</h1>`)
})

app.get("/next", (req, res) => {
    res.status(200).send("<h1>This is the next page<h1>")
})

app.all('*',(req, res) =>{
    res.status(404).send("<h1>Error 404 check the path</h1>")
})
app.listen(2000)