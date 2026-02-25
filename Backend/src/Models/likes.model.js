const mongoose = require('mongoose');
const { post } = require('../app');


const likeSchema= new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required:[true,'post require ']
    },
    username:{
        type:String,
        required:[true,"user required to like"]
    }
},{
    timestamps:true
});

likeSchema.index({post:1,username:1},{unique:true})
const likemodel= mongoose.model("likes",likeSchema);

module.exports=likemodel;