const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentRoutes = require('./routes/students');

mongoose.connect('mongodb://127.0.0.1:27017/studentdatabase')
    .then(() => {
        console.log('Connected to mongo!');
    })
    .catch(error => {
        console.error(`Error connecting to mongo ${error.message}`);
    });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/students', studentRoutes);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});
