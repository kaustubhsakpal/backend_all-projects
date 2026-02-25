import React, { useContext, useEffect } from 'react'
import  { feedContext } from '../context/FeedContext'
import { getfeed } from '../services/feedapi';

const feedhook =  () => {
  const context = useContext(feedContext)
  const {loading,setloading,user,setuser} = context;

  if(!context){
    throw new Error("usefeedhook must be used within a feedContextprovider")
  }
  useEffect(()=>{
    const feed=async (i)=>{
           try{
    setloading(true);
    const response=await getfeed();
    setuser(response.data.post.reverse())
  }catch(err){
    throw err
  }
  finally{
    setloading(false)
  }
    }
    feed()
  },[])
 
  return {loading,user};
}

export default feedhook