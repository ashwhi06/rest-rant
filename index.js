require('dotenv').config()

const express = require('express')
const app = express()

//import views engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//import places router
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

//404 route
app.get('*', (req, res) => {
    res.status(404).send('<h4>404 not found</h4>')
})

app.listen(process.env.PORT)
