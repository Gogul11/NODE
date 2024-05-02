const express = require('express')
const app = express()

const data = require('./data')

app.get("/", (req, res) => {
    res.status(200).json(data) // Default routing page
})

app.get("/search", (req, res) => {
    const name = req.query.name; //using query method to find the name
    const id = req.query.id;    //using query method to find the id

    const searchlistBynum = data.filter((e) => e.id == id) //Array to filter by id
    const searchlistByname = data.filter((e) => e.name == name) //Array to filter by name

    const searchlist = [...searchlistByname, ...searchlistBynum] //Concatenates these two array

    if(searchlist.length == 0){
        return res.status(404).send("<h2>The data is not found</h2>")
    }   
    console.log(searchlist)
    return res.status(200).json(searchlist)
})

app.get("*", (req, res) => {
    res.send(
        `<h1>Something went wrong</h1>
        <h3>Please check the url path</h3>`
    )
})      //Default rotue if any error persits

app.listen('5000', (req, res) => {
    console.log("The server is listening on the port 5000")
})
