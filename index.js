require('dotenv').config()
const express = require('express')
const app = express()

//Express settings
app.set('views', './views') //Views folder
app.set('view engine', 'jsx') // View Engine
app.engine('jsx', require('express-react-views').createEngine()) // View Engine
app.use(express.static('public')) //Static Files
app.use(express.urlencoded({ extended: true }))

//Controllers & Routes
app.use('/places', require('./controllers/places_controller'))

//Home route
app.get('/', (req, res) => {
    res.render('home')
})

//404 route
app.get('*', (req, res) => {
    res.render('error404')
})

// GET /places
app.get('/', (req, res) => {
    res.render('places/index')
})


app.listen(process.env.PORT)
