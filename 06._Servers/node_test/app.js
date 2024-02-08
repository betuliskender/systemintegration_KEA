import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send({ message: "Hello"})
})

const PORT = 8050;
app.listen(PORT, () => console.log("Server is running on port", PORT))