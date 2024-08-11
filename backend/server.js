//To load env var from a .env file
//Config attaches it to the process object
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')


const app = express()

//middleware acts between the req and the resp

//Checks if theres a body to the request => Attaches it to the request object => We can access it in the req handler
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//Connect to db & Listen for requests
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & Listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })