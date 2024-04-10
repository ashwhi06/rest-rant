const router = require("express").Router();
const places = require("../models/places");

router.get("/", (req, res) => {
  res.render("places/index", { places }); // This is the response for GET /places (ALL places)
});

//New route for GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

//Post route for POST /places
router.post("/", (req, res) => {
  if (!req.body.pic) {
    res.body.pic = "https://source.unsplash.com/random";
  }
  if (!req.body.city) {
    res.body.city = "Anywhere";
  }
  if (!req.body.state) {
    res.body.state = "USA";
  }
  places.push(req.body); // This is the response for POST /places (NEW place)
  res.redirect("/places");
});

module.exports = router;
