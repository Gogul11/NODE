const express = require("express")
const router = express.Router() //Creating the instance

router.get("/", (req, res) => {
    res.status(200).send(`This is the ${req.path} page`)
})

router.get("/admin", (req, res) => {
    res.status(200).send(`This is the ${req.path} page`)
})

router.get("/next", (req, res) => {
    res.status(200).send(`This is the ${req.path} page`)
})

router.get("/out", (req, res) => {
    res.status(200).send(`This is the ${req.path} page`)
})

module.exports = router