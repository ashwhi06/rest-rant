require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

//404 route
app.get('*', (req, res) => {
    res.status(404).send('<h4>404 not found</h4>')
})

app.listen(process.env.PORT)
