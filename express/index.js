const express = require("express")
const zod = require("zod")
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

//middleware 

const sampleMiddleware = (req,res,next) => {
    console.log(req.parmas)
    const id = req.params.id
    if(id !== "1"){ 
        res.status(403).json({
            success : false,
            message : "Invalid Id"
        })
    } else {
        next()
    }
}

app.get("/middleware-example/:id",sampleMiddleware, (req,res)=> {
    res.send("The middleware works correctly")
})


//ZOD Input validation

const schema = zod.array(zod.number()) //schema for array of numbers [1,2,3,4]
const schema1 = zod.object({
    email : zod.string(),
    password : zod.string().min(8),
    country : zod.literal("US").or(zod.literal("UK")) //literal means exact string
})
app.post("/zod",(req,res)=>{
    const payload = req.body 
    const response = schema.safeParse(payload.numArr) // safeParse won't throw error just give sucess false, parse() will throw error 
    res.json({response})    
})


//global catches 
//Need to define last, and app.use means it will be called all routes
app.use(function(err,req,res,next){
    res.json({
        msg: "something went wrong"
    })
})

app.listen(1100)