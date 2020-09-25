//route
const express = require("express");
const router = express.Router();

const dogs = require("./dogs.json");

router.get("/dogs", (req, res) => {
    res.send(dogs);
});


module.exports = router;