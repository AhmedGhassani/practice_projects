const express = require('express')
const mongoose = require('mongoose');
const path = require('path');

// Set port for local host
const port = 3000

//Connect to database
mongoose.connect('mongodb://localhost:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo: Connection Open")
    })
    .catch((err) => {
        console.log("Mongo: Connection Failed");
        console.log(err);
    })

    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/views'));
    app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is listening in on ${port}`);
})

