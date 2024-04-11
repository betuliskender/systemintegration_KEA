import express from "express"
import multer from "multer"

const app = express()

app.use(express.urlencoded({extended: true}))
// const upload = multer({dest: "./uploads"})

// import path from "path"
// console.log(path.sep)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const uniqueFileName = `${uniquePrefix}__${file.originalname}`
      cb(null, uniqueFileName)
    }
})
  
function fileFilter(req, file, cb) {
    const allowedTypes = ["image/png", "image/jpeg"]

    if(!allowedTypes.includes(file.mimetype)) {
        cb(new Error("File type not allowed: " + file.mimetype), false)
    } else {
        cb(null, true)
    }

}

const upload = multer({ 
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024 //10MB
    },
    fileFilter
 })

app.post("/form", (req, res) => {
    delete req.body.password
    res.send(req.body)
})

app.post("/fileform", upload.single("file"), (req, res) => {
    res.send({})
})

const PORT = 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))