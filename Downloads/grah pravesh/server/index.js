require("./config/db")
const cors = require("cors")
const router = require("./router/UserRouter")
const routerPro = require("./router/Property")
const express = require("express")

let app = express()
app.use(express.json())

app.use(cors())
app.use("/upload", express.static("upload"));
app.use(routerPro)
app.use(router)

app.listen(3000,()=> console.log("Server is connected"))