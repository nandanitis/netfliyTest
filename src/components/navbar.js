import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="container">
    
    <div id="navBtn">
      <i className="fas fa-bars openNav" />
    </div>
    <div className="navbar">
      <i className="fas fa-times close" />
      <ul>
        <li ><a><Link to='/'>Home</Link></a></li>
        <li><a ><Link to='/api/movies'>Movies</Link></a></li>
        <li><a><Link to='/api/tvshows'>TV Shows</Link></a></li>
        <li><a><Link to='/contactus'>Contact Us</Link></a></li>
      </ul>
    </div>
  
  </div>
  )
}

export default Navbar