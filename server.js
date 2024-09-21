const express = require('express');
const app = express();
const mongodb = require('/data/database');
const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

mongodb.initDB((err) => {
    if (err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Listening on port ${port}`)});
    }
})

