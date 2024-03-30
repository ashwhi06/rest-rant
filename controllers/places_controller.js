const router = require('express').Router()
const places = require('../models/place')

router.get('/', (req, res) => {
    let places = [{
        name: 'Tapas Unlimited',
        city: 'Miami',
        state: 'FL',
        cuisines: 'Mexican, American',
        pic: '/images/tapas.jpg'
      }, {
        name: 'Coding Brunch Cafe',
        city: 'Atlanta',
        state: 'GA',
        cuisines: 'Coffee, Bakery',
        pic: '/images/brunch.jpg'
      }]
        
    res.render('places/index', places) // This is the response for GET /places (ALL places)
})

module.exports = router