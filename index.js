const express = require("express")
const routes = require("./user.js")

const app = express()
const port = 5000;
 app.use(express.json())//middleware will parse the JSON data and populate req.body with the resulting JavaScript object.

 app.use("/user",routes)

 app.listen(port,()=>{
    console.log("server is running at port 5000")
 })