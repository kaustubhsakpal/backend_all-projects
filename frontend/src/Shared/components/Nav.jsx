import React from 'react'
import '../Button.scss'
import '../nav.scss'
import { useNavigate } from 'react-router'

const Nav = () => {
    const navigate = useNavigate()
  return (
    <nav>
        <h1>InstaClone</h1>
        <button className='btn'
        onClick={()=>{
          navigate('/createpost');
        }}
        >Create post</button>
    </nav>
  )

}

export default Nav