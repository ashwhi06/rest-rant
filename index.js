require('dotenv').config()

const express = require('express')
const app = express()

//import views engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//import places router
app.use('/places', require('./controllers/places'))

//default route
app.get('/', (req, res) => {
    res.render('home')
})

// GET /places
app.get('/', (req, res) => {
    let places = []
    res.render('places/index')
})

//404 route
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
