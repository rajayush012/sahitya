const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const authorRoutes = require('./routes/authors');
const novelRoutes = require('./routes/novels');
const partsRoutes = require('./routes/parts');


mongoose.connect("mongodb+srv://Alaap:alaap008@cluster0-dzslo.mongodb.net/test?retryWrites=true", function(err) {
    if (err) {
        console.log("Database Not Connected", err);
    } else {
        console.log("Atlas Connected")
    }
});

const port = 3000;
const app = express();

app.use('/author',authorRoutes);
app.use('/novels',novelRoutes);
app.use('./parts',partsRoutes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.listen(port, ()=>{
    console.log('Server is up on port: ',port);
});