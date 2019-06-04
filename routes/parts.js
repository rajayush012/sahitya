const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Parts= require ('../models/partModel');
const Novels = require('../models/novelModel');

router.get('/',(req,res)=>{
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

router.get('/:novelid',(req,res)=>{
    Parts.find({novelid:req.params.novelid}, (err,parts)=>{
        if(err){
            console.log(err);
        }else{
            res.render('parts/allparts',{parts:parts});
        }
    });
})

router.get('/:novelid/addpart',(req,res)=>{
   res.render('parts/addPart');
});

router.post('/:novelid/addpart',(req, res)=>{
 //   console.log(req.user);
    Parts.create({
        title: req.body.tile,
        novelid: req.params.novelid,
        collabauthor: req.user._id,
        partcontent: req.body.partcontent
    });
    res.send('Success');
   
})

module.exports = router;