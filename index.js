require('dotenv').config()
const express = require('express')
const app = express()

//Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Controllers & Routes
app.use('/places', require('./controllers/places'))

//Home route
app.get('/', (req, res) => {
    res.render('home')
})

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', {places})
})

// // GET /places/index
// app.get('/places/index', (req, res) => {
//     let places = []
//     res.render('places/index', places)
// })

//404 route
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
