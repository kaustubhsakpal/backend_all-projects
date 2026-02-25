const mongoose = require('mongoose');
const postSchema=new  mongoose.Schema({
    caption:{
        type:String,
        required:[true,""],
        default:" "
    },
    img_url:{
        type:String,
        required:[true,""]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[true,"user id not found"]
    }

})

const postModel=mongoose.model('posts',postSchema); 

module.exports=postModel;