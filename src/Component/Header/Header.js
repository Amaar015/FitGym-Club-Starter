import React, { useState } from 'react'
import './Header.css';
import logo from './../../assets/logo.png';
const Header = () => {
       const mobile=window.innerWidth<=786? true:false;
       const [menuOpened,SetmenuOpened]=useState(false);
     return (
   <div className="header">
            <img src={logo} alt=""  className='logo'/>
              {/* {(menuOpened===false && menuOpened===true)?{
                <div>

                </div>
              }} */}
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testinomials</li>
            </ul>
   </div>
    )
}

export default Header