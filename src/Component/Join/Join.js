import React, { useRef } from 'react'
import './join.css';
// import emailjs from '@emailjs/browser';
const Join = () => {
 const form =useRef();
    return (
      <div className="join">
        <div className="left-j">
            <hr/>
            <div>
                <span className='Stroke-text'>Ready to</span>
                <span>Level Up</span>
            </div>
            <div>
                <span>Your Body</span>
                <span className='Stroke-text'> with us ?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className='email-container'>
                 <input type="email" placeholder='Enter your Email'  />
                 <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
      </div>
    )
}

export default Join 