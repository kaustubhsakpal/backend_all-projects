import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
    baseURL:"http://localhost:3000/auth",
    withCredentials:true
})

export async function Registerservice(username,email,password){
       try{
        const post = await api.post(
          "/register",
          {
           username,
           email,
          password,
          }
        );
        return post.data;
      }
        catch(err){
          if(err.response){
            if(err.response.status === 404){
            alert("Wrong details / user not found");
          }
    
          else if(err.response.status === 400){
            alert(err.response.data.message);
          }
    
          else if(err.response.status === 409){
            alert("User already exists");
          }
          }
          else{
            alert("server down")
          }
        }
}

export  async function Loginservice(name,password){
       try{
        const login =await api.post("/login",{
          username:name,
          email:name,
          password
        })
        return login
      }catch(err){
          if(err.response){
            if(err.response.status===401){
              toast.error("Wrong information")
              return;
            }
            if(err.response.status===404){
              toast.error("Wrong information")
              return;
            }
          }
        }
}