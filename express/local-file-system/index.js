const express = require("express")
const app = express()
const fs = require("fs")

app.use(express.json())

app.get("/files", (req, res) => {
    try {
        const currentPath = __dirname + "\\files"
        fs.readdir(currentPath, (err, files) => {
            if (err) {
                throw Error(err)
            } else {
                res.json(files)
            }
        })
    } catch (e) {
        throw Error(e)
    }
})


app.get("/read/:filename", (req, res) => {
    try {
        const fileName = req.params.filename
        const currentPath = `${__dirname}\\files\\${fileName}`
        const data = fs.readFileSync(currentPath, { encoding: 'utf8' })
        res.send(data)
    }
    catch (e) {
        throw Error(e)
    }
})

app.post("/add-file", (req, res) => {
    try {
        const payload = req.body
        const body = payload.text
        const fileName = payload.fileName
        const currentPath = `${__dirname}\\files\\${fileName}`
        fs.writeFile(currentPath, body, (err) => {
            console.log(err)
        })
        res.json({
            success: true,
            fileName: fileName
        })
    }
    catch (e) {
        throw Error(e)
    }

})

app.delete("/delete/:filename", (req, res) => {
    try {
        const fileName = req.params.filename
        const currentPath = `${__dirname}\\files\\${fileName}`
        fs.unlink(currentPath, (err) => {
            console.log(err)
        })
        res.json({
            success: true,
            message: "File Deleted"
        })
    }
    catch (e) {
        throw Error(e)
    }
})


app.listen(3001)