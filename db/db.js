const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Kizaka:welcomeAgain@cluster0.cajab.mongodb.net/Kizaka?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    (err) => {

        if (err) {
            console.log("Some error occured while connecting to the db");

        } else {
            console.log("Db connected successfully");
        }
    });