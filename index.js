require('dotenv').config()
const express = require('express')
const app = express()

//Express settings
app.set('views', './views') //Views folder
app.set('view engine', 'jsx') // View Engine
app.engine('jsx', require('express-react-views').createEngine()) // View Engine
app.use(express.static('public')) //Static Files
//Controllers & Routes
app.use('/places', require('./controllers/places'))

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
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://images.pexels.com/photos/4587958/pexels-photo-4587958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://images.pexels.com/photos/4587953/pexels-photo-4587953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }]
        
    res.render('places/index', { places })
})


app.listen(process.env.PORT)
