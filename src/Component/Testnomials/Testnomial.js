import React, { useState } from 'react'
import './testnomial.css';
import {testimonialsData} from  '../../data/testimonialsData';
import Leftarrow from './../../assets/leftArrow.png'
import Rightarrow from './../../assets/rightArrow.png'
import {motion} from 'framer-motion';
const Testnomial = () => {
   const transition={type:'spring', duration:3}

  const [Selected,Setselected]=useState(0);
  const tLength=testimonialsData.length;
  return (
    <div className="testnomial" id='testnomial'>
         <div className="left-t">
            <span>Testnomial</span>
            <span className="Stroke-text">
                What they
            </span>
            <span>Say about us</span>
               <motion.span 
                  key={Selected}
                  initial={{opacity:0,x:-100}}
                  animate={{opacity:1,x:0}}
                  exit={{opacity:0,x:100}}
                  transition={{transition}}
               >
                {testimonialsData[Selected].review}
               </motion.span>
               <span>
                <span style={{color:'var(--orange)'}}>{testimonialsData[Selected].name}</span>
                - {testimonialsData[Selected].status}
               </span>
         </div>
         <div className="right-t">
          <motion.div 
           initial={{opacity:0,x:-100}}
           transition={{...transition,duration:2}}
           whileInView={{opacity:1,x:0}}
          className='border'></motion.div>
          <motion.div
           initial={{opacity:0,x:100}}
           transition={{...transition,duration:2}}
           whileInView={{opacity:1,x:0}}
          
           className='fill'></motion.div>
             <motion.img 
             key={Selected}
             initial={{opacity:0,x:100}}
             animate={{opacity:1,x:0}}
             exit={{opacity:0,x:-100}}
             transition={{transition}}
             src={testimonialsData[Selected].image} alt="" />
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