const express = require("express")
const path = require("path")
const BodyPraser = require("body-parser")      //Importing the body-parser module
const app = express()

const data = []

app.use(express.static(path.resolve(__dirname, "./public")))       //Using middleware to access the public assets

const url = BodyPraser.urlencoded({extended : false})   //Urlencoded is used to parse the data

app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./Public/enter.html"))        //Returning HTML file
})

app.post("/login", url,(req, res) => {      //post method is to post the data to the json file
    data.push(req.body)     //Adds the data in the data array
    res.status(200).json(data)
})

app.listen(4000, () => {
    console.log("The server is running on the port 4000")
})

