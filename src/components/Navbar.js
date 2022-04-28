import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbarup'>
        <ul>
            <li><input className='search-icon' placeholder='Search' /></li>
            <li>Home</li>
            <li>Courses</li>
            <li className='cart'><i className="fa fa-shopping-cart"></i></li>
            <li className='login'>Login</li>
        </ul>
    </div>
  )
}

export default Navbar