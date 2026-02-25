const mongoose = require('mongoose')

async function dbconnection(){
  await mongoose.connect(process.env.MONGO_URI)
   .then(()=>{
    console.log("database connection succesfully");
    
   })
}

module.exports=dbconnection;