const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const parts= require ('../models/partModel');


router.get('/',(req,res)=>{
    console.log(req.user)
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
 //   console.log(req.user);
   
})

module.exports = router;