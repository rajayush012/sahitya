const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const parts= require ('../models/partModel');
router.get('/',(req,res)=>{
    novels.find({}, (err, menuItems)=>{
        if (err){
            console.log(err);
            res.redirect('/');
        }
        else
        {
            res.send()
        }
    })
})
router.post('/',(req, res)=>{
    parts.create({
    //
    })
})

module.exports = router;