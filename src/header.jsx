import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className='headerdiv'>
        <Link to='/' className='headerhome1'>HOME</Link>
        {/* <Link to='about' className='headerhome1'>ABOUT</Link> */}
        <Link to='blog' className='headerhome1'>BLOG</Link>
        <Link to='Education' className='headerhome1'>EDUCATION</Link>
        <Link to='contact' className='headerhome1'>CONTACT</Link>

      </div>
    </div>
  )
}

export default Header
