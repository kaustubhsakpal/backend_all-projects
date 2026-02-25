import { createContext, useState } from "react"
import { createpost } from "../services/createpost.api";

export const feedContext =createContext()

export const FeedContextprovider = ({children}) => {
   const [loading, setloading] = useState(false);
   const [user, setuser] = useState(null);

   //post data 
  const [caption, setcaption] = useState('');
  const [image, setimage] = useState(null)

  return (
    <feedContext.Provider value={{loading,setloading,user,setuser,caption,setcaption,image,setimage,createpost}} >
          {children}
    </feedContext.Provider>
  )
}

export default FeedContextprovider