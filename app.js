const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const authorRoutes = require('./routes/authors');
const novelRoutes = require('./routes/novels');
const partsRoutes = require('./routes/parts');
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const Author = require('./models/authorModel');

mongoose.connect("mongodb+srv://Alaap:alaap008@cluster0-dzslo.mongodb.net/test?retryWrites=true", function(err) {
    if (err) {
        console.log("Database Not Connected", err);
    } else {
        console.log("Atlas Connected")
    }
});

const port = 3000;
const app = express();

app.set('view engine','ejs');
app.use(require('express-session')({
    secret: "Old Monks",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(Author.authenticate()));
passport.serializeUser(Author.serializeUser());
passport.deserializeUser(Author.deserializeUser());
app.use('/author',authorRoutes);
app.use('/novels',novelRoutes);
app.use('/parts',partsRoutes);
app.use((req,res,next)=>{
    res.locals.currentAuthor = req.user;
    next();
});
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(port, ()=>{
    console.log('Server is up on port: ',port);
});