const express = require('express');
const mongoose = require('mongoose');
const Author = require('../models/authorModel');
const passport = require('passport');
const Novels = require('../models/novelModel');
const Parts = require('../models/partModel');
const router = express.Router();



router.get('/dashboard',isLoggedIn,(req,res)=>{
   // console.log(req.user);
   Novels.find({mainauthor: {id: req.user._id}},(err,novels)=>{
        if(err){
            console.log(err);
        }else{
            Parts.find({collabauthor: {id: req.user.id}}, (err,parts)=>{
                if(err){
                    console.log(err);
                }else{
                    res.render('author/dashboard',{novels:novels, parts:parts});
                }});
        }
   });
    
});

router.get('/signup',(req,res)=>{
    res.render('author/signup');
});

router.post('/signup',(req,res)=>{
    var newAuthor = new Author({username: req.body.username, email: req.body.email,name: req.body.name});
    Author.register(newAuthor,req.body.password, (err,author)=>{
        if(err){
            console.log(err);
            res.redirect('/')
        }
        passport.authenticate("local")(req,res, ()=>{
        res.redirect('/novels')
        })
    } );
});

router.get('/login',(req,res)=>{
    res.render('author/login');
});

router.post('/login',passport.authenticate("local",{
    successRedirect: "/novels",
    failureRedirect: "/author/login"
}),(req,res)=>{
    
});

router.get('/logout',(req,res)=>{
    req.logOut();
    res.redirect('/');
})


router.get('/dahboard',(req,res)=>{
    res.render('author/dashboard');
})
function isLoggedIn(req,res,next){
   // console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/author/login');
}

module.exports = router;
