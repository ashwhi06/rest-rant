const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places') // This is the response for GET /places (ALL places)
})

module.exports = router