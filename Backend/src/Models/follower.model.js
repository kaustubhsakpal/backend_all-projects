const mongoose = require("mongoose");

const FollowSchema = new mongoose.Schema(
  {
    followers:String,
    follows: String,
    status:{
      type:String,
      default:'pending',
      enum:{
        values:["pending","accepted","rejected"],
        message:"status can only be pending accpeted or rejected"
      }
    }
  },
  {
    timestamps: true,
  },
);

FollowSchema.index({followers:1,follows:1},{unique:true})

const followmodel = mongoose.model("follow", FollowSchema);

module.exports = followmodel;
