import React, { useState } from 'react'
import './testnomial.css';
import {testimonialsData} from  '../../data/testimonialsData';
import Leftarrow from './../../assets/leftArrow.png'
import Rightarrow from './../../assets/rightArrow.png'
const Testnomial = () => {
  const [Selected,Setselected]=useState(0);
  const tLength=testimonialsData.length;
  return (
    <div className="testnomial">
         <div className="left-t">
            <span>Testnomial</span>
            <span className="Stroke-text">
                What they
            </span>
            <span>Say about us</span>
               <span>
                {testimonialsData[Selected].review}
               </span>
               <span>
                <span style={{color:'var(--orange)'}}>{testimonialsData[Selected].name}</span>
                - {testimonialsData[Selected].status}
               </span>
         </div>
         <div className="right-t">
          <div className='border'></div>
          <div className='fill'></div>
             <img src={testimonialsData[Selected].image} alt="" />
             <div className="arrows">
               <img onClick={()=>{
                Selected===0?Setselected(tLength-1):
                Setselected((prev)=>prev-1)
               }}
                src={Leftarrow} alt="" /> 
                
                <img 
                   onClick={()=>{
                    Selected===tLength-1?
                    Setselected(0):
                    Setselected((prev)=>prev+1)
                   }} 
                src={Rightarrow} alt="" />
             </div>
         </div>
    </div>
    )
}

export default Testnomial