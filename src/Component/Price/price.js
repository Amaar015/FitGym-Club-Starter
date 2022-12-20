import React from 'react'
import './price.css';
import {plansData} from './../../data/plansData';
import whitetick from './../../assets/whiteTick.png'
const price = () => {
  return (
       <div className="plans-container" id='plan'>
        <div className="blur blur-p1"></div>
        <div className="blur blur-p2"></div>

        <div className="programs-header">
            <span className='Stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='Stroke-text'>NOW WITHUS</span>
        </div>
        <div className="plans">
    {plansData.map((plan,i)=>{
          return(
    <div className="plan">
        {plan.icon}
    <span>{plan.name}</span>
    <span>${plan.price}</span>
    <div className="features">
    {plan.features.map((feature,i)=>{
          return(                             
      <div className="feature">
                                <img src={whitetick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        
                        )       })
                    }
                </div>
                <div>
                    <span>See more Benifits</span>
                    <button className='btn join'>Join Now</button>
                </div>
             </div>
          ) })}
        </div>
       </div>
    )
}

export default price