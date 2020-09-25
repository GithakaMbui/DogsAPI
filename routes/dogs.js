//route
const express = require("express");
const router = express.Router();

const Dog = require("../models/Dog");

//const dogs = require("./dogs.json");

// Get list of dogs from json file
// // router.get("/dogs", (req, res) => {
// //     res.send(dogs);
// // });

//Get list pf dogs fro  mongo db
router.get("/dogs", async (req, res) => {
    const dogs = await Dog.find(); //list pf all dogs in database
    //send it as a list of dogs
    res.send(dogs);
})

//post
router.post("/dog", async (req, res) => {
    //create a new dog
    const dog = new Dog({
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        image: req.body.image,
    });

    //save the created dog
    const savedDog = await dog.save();
    //return the saved dog to user as a response
    res.send(savedDog);

});

//delete route
router.delete("/dog", async (req, res) => {
    const id = req.header("dog_id");
    const result = await Dog.deleteOne({
        _id: id
    });
    res.send(`The dog with id ${id} has been deleted`);
});

//update route
router.patch("/dog", async (req, res) => {
    const id = req.header("dog_id");

    const dog = await Dog.findById(id);

    Object.assign(dog, req.body);
    //save the updated dog
    const savedDog = await dog.save();
    //return the saved dog to user as a response
    res.send(savedDog);

});


module.exports = router;