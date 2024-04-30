const data = require("./data");

const express = require("express");
const app = express();


const Arr1 = data.filter((e) => { 
    if(e.id == 2){
         return e;       //creating new array for displaying the data of a element of specified condition
    }
});
app.get("/", (req, res) =>{
    res.status(200).send(`<a href = '/data'>Click Here for data</a>`); //default home page
})

app.get("/data", (req, res) => {
    res.status(200).json(data)          //Sending the entire data from data.js file
});

app.get("/data/list", (req, res) => {
    res.status(200).json(Arr1)   //request for the newly created array1
});

app.get("/data/list/:listnum", (req, res) => {
    const listnum = req.params.listnum
    console.log(req.params)
    const specificArr = data.filter((e) => e.name == listnum).map(e => e.name);
    if(specificArr.length > 0){
        res.status(200).json(specificArr)
    }
    else{
        res.status(404).send(`<h1>Oops something went wrong</h1>
                                <h2>Cannot find ID of name ${listnum}</h2>`)
    }

}); // Route params used for fetching the absoulte data.
//Here :listnum is the routeparams so we can you use the listnum based on our operations

app.all("*", (req, res) => {
    res.status(404).send(
        `<h1>Error 404</h1>
        <h3>Check the path of the page</h3>`
    )
}); //default routing for every  wrong request

app.listen(5000, () =>{
    console.log("The server is listening in the port 5000")
});