const express = require("express");
const app = express()

app.listen(3000, function(){
    console.log("O meu servidor tah funcionando porta 3000")
})

app.get("/nome", (req, res) => {
    res.render("index.ejs")
})

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))

app.post("/show", (req, res) => {
    console.log(req.body)
})

