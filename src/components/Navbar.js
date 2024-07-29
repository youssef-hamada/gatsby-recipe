import React from 'react'
import {Link} from 'gatsby'
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assests/images/logo.svg"
import { useState } from 'react'

const Navbar = () => {

    const [show,setShow] = useState(false)
    // const handleShowLinks = () => {
    //     setShow(show => !show )
    // }
  return (
    <nav className='navbar'>
        
      <div className="nav-center">
        <div className="nav-header">
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <button className='nav-btn' onClick={() => setShow(show => !show)}>
                <FiAlignJustify/>
            </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
            <Link to='/' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Home</Link>
            <Link to='/recipes' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Recipes</Link>
            <Link to='/tags' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Tags</Link>
            <Link to='/about' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>About</Link>
            {/* <Link to='/gallery' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>Gallery</Link> */}
            <div className="nav-link contact-link" >
                <Link to='/contact' className='btn' onClick={() => setShow(false)}>Contact</Link>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
