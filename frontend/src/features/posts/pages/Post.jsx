import Nav from '../../../Shared/components/Nav';
import Postlayout from '../components/Postlayout'
import feedhook from '../hooks/feedhook'

const Post = () => {
  const {loading,user} = feedhook();  

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <>
     <div className='postcontainer'>
      <Nav />
        <div className='feedcontroller'></div>
  {
   user?.map((post,i)=>{    
     return <Postlayout key={i} user={post.user} post={post} />      
    })
  }
     </div>
    </>
  )
}

export default Post