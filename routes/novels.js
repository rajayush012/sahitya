const express = require('express');
const mongoose = require('mongoose');
const Author = require('../models/authorModel');
const router = express.Router();
const Novels=require('../models/novelModel');
const Parts = require('../models/partModel');

router.get('/',isLoggedIn,(req,res)=>{
    Novels.find({}, (err, posts)=>{
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
    Author.findById(req.user._id,(err,user)=>{
        if(err){
            console.log(err);
        }
        
    Novels.create
    ({
    title: req.body.title,
    idea: req.body.idea,
    genre: req.body.genre,
    status: req.body.status,
    content: req.body.content,
    mainauthor: {id:req.user._id , name: user.name} //add author
    })
    
    res.redirect('/novels');

    })
    
})

router.get('/addNovel',isLoggedIn,(req,res)=>{
    res.render('novels/addNovel');
});

router.get('/:novelid',isLoggedIn,(req,res)=>{
    Novels.findById(req.params.novelid, (err,novel)=>{
        if(err){
            console.log(err);
            res.redirect('/novels');
        }else{

            Parts.find({novelid: novel._id}, (err,parts)=>{

                if(err)
                    console.log(err);
                res.render('novels/noveldetail',{novel: novel, parts:parts});

            })
            
        }
    });
});

router.get('/:novelid/:partid',isLoggedIn,(req,res)=>{
    const novelid = req.params.novelid;
    Parts.findById(req.params.partid,(err,part)=>{
        if(err){
            console.log(err);
        }else{
            res.render('parts/partdetail',{part:part,novelid:novelid});
        }
    })
});

function isLoggedIn(req,res,next){
    // console.log(req.isAuthenticated());
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect('/author/login');
}




module.exports = router;