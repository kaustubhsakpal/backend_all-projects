import axios from 'axios'

const api =axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})
//http://localhost:3000/api/post
export async function createpost(caption,image){
    const formData = new FormData();
 formData.append("caption",caption);
 formData.append("image",image);
    const createpost = await api.post('/api/post',formData,{
       headers:{
        'Content-Type':'multipart/form-data'
       }
    })
    return createpost.data
}