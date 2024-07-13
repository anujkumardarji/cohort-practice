const express = require("express")

const app = express()

//basic route 
app.get("/",(req,res) => {
    res.send("This is it")
})


//query parameter 
app.get("/query",(req,res) => { //query?example=1
    const example = req.query.example
    res.send(example.toString())
})

app.use(express.json()) //middle ware to parse json as payload from body 

app.post("/create",(req,res)=> {
    const payload = req.body
    res.json({
        message : "Success",
        payload : payload
    })
})

app.put("/update/:id",(req,res)=> {
    const payload = req.body
    const params = req.params.id
    res.json({
        success : true,
        payload : payload,
        params : params 
    })
})

app.delete("/delete/:id",(req,res) => {
    const params = req.params.id
    res.status(200).json({
        success : true,
        message : "Deleted successfully",
        params : params
    })
})

app.listen(1100)