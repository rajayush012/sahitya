const express = require('express');
const mongoose = require('mongoose');
const Author = require('../models/authorModel');
const passport = require('passport');
const Novels = require('../models/novelModel');
const Parts = require('../models/partModel');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

router.post("/signup", (req, res, next) => {
    Author.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "Mail exists"
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else {
              const user = new Author({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                email: req.body.email,
                password: hash
              });
              user
                .save()
                .then(result => {
                  console.log(result);
                  res.status(201).json({
                    message: "User created"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  });
  router.post("/login", (req, res, next) => {
    Author.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth failed"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id
              },
              process.env.JWT_KEY,
              {
                  expiresIn: "1h"
              }
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token
            });
          }
          res.status(401).json({
            message: "Auth failed"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  































































//sign up ---- sign in
// //authenticate input against database
// Author.statics.authenticate = function (email, password, callback) {
//     username.findOne({ email: email })
//       .exec(function (err, user) {
//         if (err) {
//           return callback(err)
//         } else if (!user) {
//           var err = new Error('User not found.');
//           err.status = 401;
//           return callback(err);
//         }
//         bcrypt.compare(password, user.password, function (err, result) {
//           if (result === true) {
//             return callback(null, user);
//           } else {
//             return callback();
//           }
//         })
//       });
//   }

// //hashing a password
// Author.pre('save', function (next) {
//     var user = this;
//     //bcrypt.hash(user.password, 10, function (err, hash){
//     bcrypt.hash(user.password, 10, function (err, hash) {
//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//     })
// router.get('/dashboard',isLoggedIn,(req,res)=>{
//     //console.log(req.user);
//     var novparts = new Array();
//     var ob = {};
//    Novels.find({'mainauthor.id': req.user._id},(err,novels)=>{
//         if(err){
//             console.log(err);
//         }else{
           
//             Parts.find({'collabauthor.id' : req.user._id }, (err,parts)=>{
//                 if(err){
//                     console.log(err);
//                 }else{
                    
//                     res.render('author/dashboard',{novels:novels, parts:parts }); 
//                 }});
//         }
//    });
    
// });

// router.get('/signup',(req,res)=>{
//     res.render('author/signup');
// });

// router.post('/signup',(req,res)=>{
//     var newAuthor = new Author({username: req.body.username, email: req.body.email,name: req.body.name});
//     Author.register(newAuthor,req.body.password, (err,author)=>{
//         if(err){
//             console.log(err);
//             res.redirect('/')
//         }
//         passport.authenticate("local")(req,res, ()=>{
//         res.redirect('/novels')
//         })
//     } );
// });

// router.get('/login',(req,res)=>{
//     res.render('author/login');
// });

// router.post('/login',passport.authenticate("local",{
//     successRedirect: "/novels",
//     failureRedirect: "/author/login"
// }),(req,res)=>{
    
// });

// router.get('/logout',(req,res)=>{
//     req.logOut();
//     res.redirect('/');
// })


// router.get('/dahboard',(req,res)=>{
//     res.render('author/dashboard');
// })
// function isLoggedIn(req,res,next){
//    // console.log(req.isAuthenticated());
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect('/author/login');
// }

module.exports = router;
