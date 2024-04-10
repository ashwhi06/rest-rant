const router = require("express").Router();
const places = require("../models/places");

router.get("/", (req, res) => {
  let places = [
    {
      name: "Tapas Unlimited",
      city: "Miami",
      state: "FL",
      cuisines: "Mexican, American",
      pic: "/images/tapas.jpg",
      photoCredit: "Alex Haney on Unsplash",
    },
    {
      name: "Coding Brunch Cafe",
      city: "Atlanta",
      state: "GA",
      cuisines: "Coffee, Bakery",
      pic: "/images/brunch.jpg",
      photoCredit: "Alessandro Alimonti on Unsplash",
    },
    {
      name: "Charleston Bistro",
      city: "Charleston",
      state: "SC",
      cuisines: "Beef, Chicken",
      pic: "/images/bistro.jpg",
      photoCredit: "Mgg Vitchakorn on Unsplash",
    },
    {
      name: "Sushi By the Sea",
      city: "Surfside",
      state: "CA",
      cuisines: "Sushi",
      pic: "/images/sushi.jpg",
      photoCredit: "Vinicius Benedit on Unsplash",
    },
  ];

  res.render("places/index", { places }); // This is the response for GET /places (ALL places)
});

//New route for GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

//Post route for POST /places
router.post("/", (req, res) => {
 // console.log(req.body);
  res.send(" POST /places");
});

module.exports = router;
