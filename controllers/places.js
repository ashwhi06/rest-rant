const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index') // This is the response for GET /places (ALL places)
})

module.exports = router