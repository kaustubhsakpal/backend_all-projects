const mongoose = require('mongoose')


const userschema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,"input should not be empty"],
    },
    email:{
        type:String,
        required:[true,"input should not be empty"],
        unique:true,
        match:[/^\S+@\S+\.\S+$/,"invalid email format"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
     bio:String,
    profilepic:{
        type:String,
        default:"https://ik.imagekit.io/1o8jvpvnj/insta-clone/profile-placeholder-image-gray-silhouette-no-photo-profile-placeholder-image-gray-silhouette-no-photo-person-avatar-123478438.webp"
        
    },
    followers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    follows:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

 
})

const usermodel = mongoose.model('user',userschema)
module.exports=usermodel;