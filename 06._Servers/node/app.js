import express from "express"

const app = express()

const dataHere= []

app.get("/", (req, res) => {
    dataHere.push("OK")
    console.log(dataHere)
    res.send({ message: "Hello" })
})

app.get("/otherRoute", (req, res) => {
    res.send({ message: "This is the other route"})
})

app.post("/postrequest", (req, res) => {
    res.send({ message: "You made a post request"})
})

app.delete("/deleterequest", (req, res) => {
    res.send({ message: "You made a delete request"})
})

app.put("/putrequest", (req, res) => {
    res.send({ message: "You made a put request"})
})

const PORT = 8080
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))