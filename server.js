const express = require('express');
const app = express();
const mongodb = require('./data/database');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const ApiError = require('./utilities/error-handling/apiErrors')

//Place bodyparser BEFORE the routes, otherwise routes tries to process first!
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow_origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// ROUTES
app.use("/", require("./routes"));


mongodb.initDb((err) => {
    if (err) {
        // console.log(err) -- previous code before adding error handler
        throw new ApiError.Api500Error(`Internal Server Error: ${err}`)

    }
    else {
        app.listen(port, () => {console.log(`Database is listening; node running on port ${port}`)});
    }
});

