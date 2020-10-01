const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path')
const authorRoutes = require('./routes/authors');
const novelRoutes = require('./routes/novels');
const partsRoutes = require('./routes/parts');
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const Author = require('./models/authorModel');
const cors = require('cors');
mongoose.connect("mongodb+srv://Alaap:alaap008@cluster0-dzslo.mongodb.net/test?retryWrites=true",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      
    }
,function(err) {
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
app.use(express.static(__dirname+'/public'));
passport.use(new localStrategy(Author.authenticate()));
passport.serializeUser(Author.serializeUser());
passport.deserializeUser(Author.deserializeUser());
app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    next();
});
app.use('/author',authorRoutes);
app.use('/novels',novelRoutes);
app.use('/parts',partsRoutes);

app.use(morgan('dev'));


app.use(express.static(path.join(__dirname,'client', 'build')))
app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname,'client', 'build', 'index.html'))
})


app.listen(port, ()=>{
    console.log('Server is up on port: ',port);
});