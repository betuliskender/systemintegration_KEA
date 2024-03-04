import express from 'express'

const app = express()

app.use(express.static('public'))

const randomNumbers = []

app.get('/randomNumbers', (req, res) => {
    res.send({data: getRandomInt(1, 1001)})
})

app.post('/simulatedNewRandomNumber', (req, res) => {
    const newNumber = getRandomInt(3, 1001)
    randomNumbers.push(newNumber)
    res.send({data: newNumber})
})

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const PORT = 8080
app.listen(PORT, () => {console.log("Server is running on", PORT)})