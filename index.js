require("./db/db");
const homeRouter = require("./routes/home");
const dogsRouter = require("./routes/dogs");
const express = require("express");

const app = express();


app.use(homeRouter);
app.use(dogsRouter);

app.listen(5500, () => {
    console.log("Server has started on port 5500");
})