const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const novels=require('../models/novelModel');

router.get('/',isLoggedIn,(req,res)=>{
    novels.find({}, (err, posts)=>{
        if (err){
            console.log(err);
            res.redirect('/');
        }
        else
        {
            res.render('novels/post',{posts: posts});
        }
    })
});


router.post('/',isLoggedIn, (req,res)=>{
    novels.create
    ({
    title: req.body.title,
    idea: req.body.idea,
    genre: req.body.genre,
    status: req.body.status,
    content: req.body.content,
    mainauthor: req.user._id//add author
    })
    
    res.redirect('/novels');
})

router.get('/addNovel',(req,res)=>{
    res.render('novels/addNovel');
})

function isLoggedIn(req,res,next){
    // console.log(req.isAuthenticated());
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect('/author/login');
}




module.exports = router;