import React from 'react'
import './navbar.css'
import logo from '../../assets/dedline-logo.png'
import { useState } from 'react'
import { useEffect } from 'react'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>About us</li>
        <li>Contact</li>
        <li><button className='btn'>Download</button> </li>
      </ul>
    </nav>
  )
}

export default Navbar
