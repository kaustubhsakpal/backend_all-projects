require('dotenv').config();
const app =require('./src/app')

const dbconnection=require('./src/config/database')


dbconnection()
app.listen(3000,()=>{
    console.log('server connected ');
    
})