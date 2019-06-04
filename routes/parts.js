const express = require('express');
const mongoose = require('mongoose');
const Novels = require ('../models/novelModel')
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
        collabauthor: {id: req.user._id,name: req.user.name},
        partcontent: req.body.partcontent
    });
    res.send('Success');

})

function isLoggedIn(req,res,next){
    // console.log(req.isAuthenticated());
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect('/author/login');
 }

module.exports = router;