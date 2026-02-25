const followmodel = require("../Models/follower.model");
const postModel = require("../Models/posts.model");
const usermodel = require("../Models/user.model");
const likemodel= require('../Models/likes.model')
async function followerscontroller(req, res) {
  const follower = req.user.username;
  const followee = req.params.username;
 
  if (follower == followee) {
    return res.status(400).json({
      message: "cannot follow yourself",
    });
  }

  const isuserexit = await usermodel.findOne({
    username: followee,
  });

  if (!isuserexit) {
    return res.status(404).json({
      message: ` ${followee} not exits`,
      isuserexit,
    });
  }

  const isallreadyfollow = await followmodel.findOne({
    followers: follower,
    follows: followee,
  });

  if (isallreadyfollow) {
    return res.status(200).json({
      message: "you are allready following ",
       message: `request already ${isallreadyfollow.status}`,
      isallreadyfollow,
    });
  }

  const follow = await followmodel.create({
    followers: follower,
    follows: followee,
  });

  res.status(200).json({
    message: "following the user successfully",
    follow,
  });
}

async function unfollowcontroller(req, res) {
  const follower = req.user.username;
  const followee = req.params.username;
  const isfollwing = await followmodel.findOne({
    followers: follower,
    follows: followee,
  });

  if (!isfollwing) {
    return res.status(404).json({
      message: `you are not following this ${follower}`,
    });
  }

  await followmodel.findByIdAndDelete(isfollwing._id);

  res.status(200).json({
    message: `succesfully unfollow ${followee}`,
  });
}

async function likescontroller(req,res) {
    const postid=req.params.postid;
    const username=req.user.username;

if(!postid){
        return res.status(400).json({
            message:"post id is required"
        })
    }
   const post = await postModel.findById(postid);
    if(!post){
        return res.status(404).json({
            message:"post does not exits "
        })
    }

    const followcheck = await followmodel.findOne({
        followers:username,
        follows:post.user,
        status:'accepted'
    })

    if(!followcheck){
      return res.status(404).json({
            message:"you are not allowed to like this post"
        })
    }
   const like = await likemodel.create({
    post:postid,
    username:username
   })

   res.status(201).json({
    message:'liked succesfully',
    like
   })

}


async function requeststatus(req,res){
    const requestid= req.params.id;
    const {action} = req.body;
     

    const request = await followmodel.findById(requestid);

    if(!request){
        return res.status(404).json({
            message:"request not  found"
        })
    }

    request.status=action;
    await request.save();

      res.status(200).json({
    message:`request ${action} successfully`,
    request
  });

}
module.exports = { followerscontroller, unfollowcontroller,likescontroller ,requeststatus };
