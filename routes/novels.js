const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const novels=require('../models/novelModel');
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


module.exports = router;