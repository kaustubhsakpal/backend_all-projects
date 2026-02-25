import {  createContext, useEffect, useState } from "react";
import {Loginservice,Registerservice} from '../services/auth.api'
export const AuthContext = createContext();

export function Authprovider ({children}) {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false)
 async function handellogin(username,password) {
  setloading(true);
   try{const response=await Loginservice(username,password)
    const userdata = response.data.user;
   setuser(userdata)   
  }
   catch(err){
    throw err
   }
   finally{
    setloading(false)
   }
 }
 async function handleregister(username,email,password){
   setloading(true)
   try{
     const response = await Registerservice(username,email,password);
     setuser(response.user);
   }
   catch(err){
    throw err
   }
   finally{
    setloading(false)
   }   
 }

 return(
  <AuthContext.Provider value={{user,loading,handellogin,handleregister}}>
    {children}
  </AuthContext.Provider>
 )
}; 