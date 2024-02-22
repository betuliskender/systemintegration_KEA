import express from 'express'

const app = express()

app.use(express.static("public"))

app.get("/synchronized-time", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"

    })

    setInterval(() => sendTimeToClient(res), 1000)
})

//res.write fordi forbindelsen skal holdes i live
function sendTimeToClient(res) {
    const time = new Date().toISOString()
    res.write(`data: ${time} \n\n`)
}

const PORT = 8080

app.listen(PORT, () => console.log("Server listening on port", PORT ))