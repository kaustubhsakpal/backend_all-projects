const express = require('express');
const cors = require("cors");;
const cookieparse= require('cookie-parser')
const Authroute = require('./Routes/auth.route')
const postRouter= require('./Routes/post.route')
const FollowRouter = require('./Routes/follower.route')
const app = express()
app.use(cors({
 origin:"http://localhost:5173",
 credentials:true
}));
//middleware's
app.use(express.json());
app.use(cookieparse())
//register
app.use('/auth',Authroute);
//login
app.use('/auth',Authroute);
//create post
app.use('/api/post',postRouter);
//get post
app.use('/api/get',postRouter)
// get post details
app.use('/api/id',postRouter)
//follow
app.use('/api/users',FollowRouter)
//unfollow
app.use('/api/unfollow',FollowRouter)
// likes
app.use('/api/like',FollowRouter)
// status
app.use('/api/follow',FollowRouter)
//feed
app.use('/api',postRouter);



//export
module.exports=app;