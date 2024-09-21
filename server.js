const express = require('express');
const app = express();
const mongodb = require('./data/database');
const port = process.env.PORT || 3000;


// ROUTES
app.use("/", require("./routes"));


mongodb.initDb((err) => {
    if (err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database is listening; node running on port ${port}`)});
    }
});

