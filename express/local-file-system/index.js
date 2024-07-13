const express = require("express")
const app = express()

app.get("/files",(req,res) => {
    res.send("HELO")
})
app.listen(3001)