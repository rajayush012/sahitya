const express = require('express');
const mongoose = require('mongoose');
const Author = require('../models/authorModel');
const router = express.Router();
const Novels=require('../models/novelModel');
const Parts = require('../models/partModel');
const cors = require('cors');

router.get('/allnovels',cors(),(req,res)=>{
    Novels.find({},(err,novs)=>{
        res.json({novs});
    })
})


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
    contents: {content:req.body.content, timestamp: Date.now()},
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

router.get('/:novelid/edit',isLoggedIn,(req,res)=>{
    Novels.findById(req.params.novelid, (err,novel)=>{
        if(err)
        {
            console.log(err);
            res.redirect('/novels');
        }
        else
        {
            res.render('novels/editNovel',{novel: novel});
        }
});
});

router.post('/:novelid/edit',isLoggedIn, (req,res)=>
{
    Novels.findById(req.params.novelid,(err,novel)=>{
        if(err){
            console.log(err)
        }else{

            if(req.user._id.equals(novel.mainauthor.id)){
                novel.title= req.body.title;
                novel.idea= req.body.idea;
                novel.genre= req.body.genre;
                novel.status= req.body.status;
                var x = req.body.content;
                var y = Date.now();
                var ob ={
                    content: x,
                    timestamp: y
                }
                novel.contents.push(ob) ;
                novel.save();
                res.redirect('/novels/'+req.params.novelid);
            }else
            {
                res.redirect('/novels');
            }        
        }
    })
})

router.post('/:novelid/delete',isLoggedIn, (req,res)=>
{
    Novels.findByIdAndDelete(req.params.novelid,(err,novel)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/novels');
        }
    })
})

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

router.post('/:novelid/merge/:partid',isLoggedIn,(req,res)=>{
    
    Parts.findById(req.params.partid,(err,part)=>{
        if(err){
            console.log(err);
        }
        Novels.findById(req.params.novelid,(err,nov)=>{
            var newContent = part.partcontent;
            var newDate = Date.now();
            var obj={
                content: newContent,
                timestamp: newDate
            }
           // console.log(newContent);
                if(err){
                    console.log(err);
                }else{
                    nov.content.push(newContent);
                    nov.collabauthor.push(part.collabauthor);
                    nov.save();
                    Parts.findByIdAndDelete(req.params.partid,(err,newerres)=>{
                        if(err){
                            console.log(err);
                        }
                        res.redirect('/novels/'+req.params.novelid);
                    })  
                }
        }
        )
    })
    
})

router.post('/:novelid/reject/:partid',isLoggedIn,(req,res)=>{    
    Parts.findById(req.params.partid,(err,part)=>{
        if(err){
            console.log(err);
        }
        else
        {
        part.status=req.body.status;
        part.comment=req.body.comment;
        part.save();    
        res.redirect('/novels/'+req.params.novelid);
        }
    })
})
router.post('/:novelid/edit/:partid',isLoggedIn,(req,res)=>{    
    Parts.findById(req.params.partid,(err,part)=>{
        if(err){
            console.log(err);
        }
        else
        {
        part.status="";
        part.partcontent=req.body.partcontent;
        part.save();    
        res.redirect('/novels/'+req.params.novelid);
        }
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