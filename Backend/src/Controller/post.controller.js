const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const postmodel = require("../Models/posts.model");
const jwt = require("jsonwebtoken");
const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATEKEY,
});

async function postController(req, res) {
  const { caption } = req.body;
  

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "file",
    folder: "insta-clone",
  });

  const post = await postmodel.create({
    caption,
    img_url: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

async function getpostController(req, res) {
const posts = await postmodel.find({user:req.user.id})
  res.status(200).json({
    message:"posts fetched successfully",
    posts
  })
}

async function getdetailcontroller(req,res){
 
  const userid= req.user.id;
  const postid = req.params.Details

  const post = await postmodel.findById(postid)
  if(!post){
    return res.status(401).json({
      message:"post not found"
    })
  }

 const validation= post.user.toString() === userid
  if(!validation){
        return res.status(403).json({
      message:"aunothrized person trying to acces the post/forbideen"
    })
  }

  res.status(200).json({
    message:"post fetch succesfully",
    post
  })
}

async function getfeedcontroller(req,res){
  //.populate("collection name") if you have given ref of this collection in another collection on base of isd and you whant to access it you can by this it will get that user all details
  //.sort(filename:-1fordec ) use for sorting the post accoring to id also we can because in id it make on time 
  //promise all also can use when we whant that when also function of awit we want run then run if any of the fail it gets fail then 
  //.lean()
const post = await postmodel.find().populate("user");
 res.status(200).json({
  message : "feed fetch succesfully",
  post
 })

}

module.exports = { postController,getpostController,getdetailcontroller,getfeedcontroller };
