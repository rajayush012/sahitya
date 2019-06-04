const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const parts= require ('../models/partModel');


router.get('/',isLoggedIn,(req,res)=>{
    //console.log(req.user)
    // novels.find({}, (err, menuItems)=>{
    //     if (err){
    //         console.log(err);
    //         res.redirect('/');
    //     }
    //     else
    //     {
    //         res.send()
    //     }
    // })
    res.send('Onparts')
})
<<<<<<< HEAD
router.post('/',(req, res)=>{
 parts.create({
     
 })
=======

router.get('/:novelid',isLoggedIn,(req,res)=>{
    Parts.find({novelid:req.params.novelid}, (err,parts)=>{
        if(err){
            console.log(err);
        }else{
            res.render('parts/allparts',{parts:parts});
        }
    });
})

router.get('/:novelid/addpart',isLoggedIn,(req,res)=>{
    Novels.findById(req.params.novelid,(err,novel)=>{
        if(err)
            console.log(err);
        else{
            res.render('parts/addPart',{novel: novel});
        }
        
    })
   
});

router.post('/:novelid/addpart',isLoggedIn,(req, res)=>{
 //   console.log(req.user);
    Parts.create({
        title: req.body.tile,
        novelid: req.params.novelid,
        collabauthor: req.user._id,
        partcontent: req.body.partcontent
    });
    res.send('Success');
>>>>>>> a1baf448e5a66beaf4c5c606400df7b9d506f4b1
   
})

function isLoggedIn(req,res,next){
    // console.log(req.isAuthenticated());
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect('/author/login');
 }
<<<<<<< HEAD
 
=======
>>>>>>> a1baf448e5a66beaf4c5c606400df7b9d506f4b1

module.exports = router;