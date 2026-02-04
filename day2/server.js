const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send("saloni")
})

app.get("/about", function (req, res) {
    res.send("about page")
})

app.get("/home",(req,res) => {
    res.send("home page")
})

app.listen(3000)