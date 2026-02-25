import { useContext } from "react";
import { feedContext } from "../context/FeedContext";


export function useCreatepost() {
  const postcontext = useContext(feedContext)

  if(!postcontext){
    console.log("postcontext not found");
  }
  
  return postcontext;
  
}