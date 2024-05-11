const express = require("express")
const app = express()
const router = require("./route")      //importing the router

app.use("/user", router)    //using the router by middleware //base url = /user

app.get("/", (req, res) => {
    res.status(200).send("This is the home page")   //routes the home page
})




app.listen(6969, () => {
    console.log("server is listenting on the port 6969")
})