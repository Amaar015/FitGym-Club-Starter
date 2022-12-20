import React, { useState } from 'react'
import './Header.css';
import logo from './../../assets/logo.png';
import bars from './../../assets/bars.png';
// import { Link } from 'react-router-dom';
const Header = () => {
       const mobile=window.innerWidth<=786? true:false;
       const [menuOpened,SetmenuOpened]=useState(false);
       
     return (
   <div className="header">
            <img src={logo} alt=""  className='logo'/>
              {menuOpened===false && mobile===true?(
                <div
                    style={{
                       background:'var(--appColor)',
                       padding:'0.5rem',
                       borderRadius:'5px'
                    }}
                    onClick={()=>{SetmenuOpened(true)}}
                >
                  <img src={bars} alt="" style={{width:'1.5rem', height:'1.5rem'}}/>
                </div>
              ):(
            <ul className='header-menu'>
                <li>
                  {/* <Link
                  onClick={()=>{SetmenuOpened(false)}}
                  activvClass='active'
                  to='header'
                  smooth={true}
                  spy={true}
                  > */}
                  Home
                  {/* </Link> */}
                  </li>
                  
                 
                <li>
                {/* <Link
                onClick={()=>{SetmenuOpened(false)}}
                activvClass='active'
                to='program'
                smooth={true}
                spy={true} */}
                
                {/* > */}
                  Programs
                  {/* </Link> */}
                  </li>
                
                <li>
                {/* <Link
                onClick={()=>{SetmenuOpened(false)}}
                activvClass='active'
                to='reasons'
                smooth={true}
                spy={true}
                > */}
                  Why us
                  {/* </Link> */}
                  </li>
                
                <li>
                {/* <Link
                onClick={()=>{SetmenuOpened(false)}}
                activvClass='active'
                to='price'
                smooth={true}
                spy={true}
                > */}
                  Plans
                  {/* </Link> */}
                  </li>
                
                <li>
                {/* <Link
                onClick={()=>{SetmenuOpened(false)}}
                activvClass='active'
                to='Testnomial'
                smooth={true}
                spy={true}
                > */}
                  Testinomials
                  {/* </Link> */}
                  </li>
            </ul>
            )}
   </div>
    )
}

export default Header