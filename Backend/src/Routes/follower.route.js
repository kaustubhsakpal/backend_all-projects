const express = require('express');
const followcontroller= require('../Controller/follower.controller');
const identifyer = require('../MiddleWare/auth.middleware')

const FollowRouter=express.Router();
///api/users/follows/username
FollowRouter.post('/follows/:username',identifyer,followcontroller.followerscontroller);
///api/unfollow/username
FollowRouter.post('/:username',identifyer,followcontroller.unfollowcontroller)
// /api/like/post/:postid
FollowRouter.post('/post/:postid',identifyer,followcontroller.likescontroller)
/**
 * @action /api/follow/request/:id
 * @description here we are mantaining the status where user accpet pending or reject follow
 */
FollowRouter.post('/request/:id',identifyer,followcontroller.requeststatus)
module.exports=FollowRouter;