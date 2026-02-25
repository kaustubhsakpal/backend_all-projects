const express = require('express');
const postcontroller =require('../Controller/post.controller')
const identifyer = require('../MiddleWare/auth.middleware')
const multer = require('multer');
const uplod = multer({storage:multer.memoryStorage()})

const postRouter = express.Router();

// post route
postRouter.post('/',uplod.single('image'),identifyer,postcontroller.postController);

// get posts
postRouter.get('/posts',identifyer,postcontroller.getpostController)

//get post details
postRouter.get('/posts/:Details',identifyer,postcontroller.getdetailcontroller)

//not writen by Ai its writeen by me  to make readable code
/**
 * @description - here we will do work on feed back and like and comment
 * @author - kaustubh
 * @access - private
 * @date - 11/06/2024
 * @api - http://localhost:3000/api/feed
 */

postRouter.get('/feed',identifyer,postcontroller.getfeedcontroller)
module.exports=postRouter;