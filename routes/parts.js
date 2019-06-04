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
router.post('/',(req, res)=>{
 parts.create({
     
 })
   
})

function isLoggedIn(req,res,next){
    // console.log(req.isAuthenticated());
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect('/author/login');
 }
 

module.exports = router;