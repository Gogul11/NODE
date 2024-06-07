const express = require("express")
const path = require("path")
const cors = require("cors")
const BodyPraser = require("body-parser")      //Importing the body-parser module
const app = express()

const data = []

app.use(cors())
app.use(express. json())
app.use(express.static(path.resolve(__dirname, "./public")))       //Using middleware to access the public assets


const url = BodyPraser.urlencoded({extended : false})   //Urlencoded is used to parse the data

app.get("/", (req, res) => {        //GET method
    res.status(200).sendFile(path.resolve(__dirname, "./Public/enter.html"))        //Returning HTML file
})

app.post("/login", url,(req, res) => {      //post method is to post the data to the json file
    data.push(req.body)                     //Adds the data in the data array
    res.status(200).json(data)
})

app.put("/update", (req, res) => {

    const id1 = parseInt(req.query.id1)
    const id2 = parseInt(req.query.id2)
    data.forEach((e) => {
            if(parseInt(e.id) === id1)
            {
                e.id = (id2)
            }
    })
    res.status(200).json(data)

})


app.delete("/del/:id", (req, res) => {
    const id = req.params.id

    const index = data.findIndex((e) => Number(e.id) === Number(id));
    if (index !== -1) {
        data.splice(index, 1);
    }
    res.status(200).json(data)
})
app.listen(4000, () => {
    console.log("The server is running on the port 4000");   
})