import React from 'react'
import './program.css';
import {programsData} from '../../data/programsData';
import Rightarrow from './../../assets/rightArrow.png'
const program = () => {
  return (
      <div className="programs" id="programs">

         <div className="programs-header">
            <span className='Stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='Stroke-text'>to Shape You</span>
         </div>
         <div className="program-categories">
              {programsData.map((program)=>{
                   return(
               <div className="category">
                   {program.image}
                    <span>{program.heading}</span><span>{program.details}</span>
                    <div className="join-now">
                      <span>Join Now</span>
                      <img src={Rightarrow} alt="" />
                    </div>
                </div>
                )
              })}
         </div>
      </div>
    )
}

export default program