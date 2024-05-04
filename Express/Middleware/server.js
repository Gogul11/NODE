const express = require('express')
const app = express()


const logDetails = (req, res, next) =>{
    console.log(`[ "${req.url}" "${req.method}" Time is '${new Date().toLocaleString()}']`);  //Gives the url path, Method and the current tiem
    next()
}

//You can pass the logDetails function to the get method as a argument
//Or you use app.use() mehtod to call the logDetails

app.use(logDetails)

app.get("/",(req, res) => {
        res.send("Home page")
})

app.get("/about",(req, res) => {
    res.send("About page")  
})
app.listen('5000', ()=>{
    console.log("The serveris listening on the port 5000")  //server is listening to the port
})