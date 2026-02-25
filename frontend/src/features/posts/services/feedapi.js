
import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export async function getfeed(){
   const feed=await api.get('/api/feed');
   console.log(feed)
   return feed
}

