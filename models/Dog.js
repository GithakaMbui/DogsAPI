const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
        minlength: 1,
    }
});

//register the dog schema to mongodb
const Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog;