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
router.post('/',(req,res)=>{
    novels.create({
    title: req.body.title,
    idea: req.body.idea,
    genre: req.body.genre,
    status: req.body.status,
    content: req.body.content,
    mainauthor: req.body.name
    })
})


module.exports = router;