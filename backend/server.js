//To load env var from a .env file
//Config attaches it to the process object
require('dotenv').config()

const express = require('express')

const app = express()

//middleware acts between the req and the resp

//Checks if theres a body to the request => Attaches it to the request object => We can access it in the req handler
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//Listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port 4000')
})