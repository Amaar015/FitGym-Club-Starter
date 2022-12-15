import React from 'react'
import './reasons.css'
import image1 from './../../assets/image1.png';
import image2 from './../../assets/image2.png';
import image3 from './../../assets/image3.png';
import image4 from './../../assets/image4.png';
import tick from './../../assets/tick.png';
const resons = () => {
  return (
      <div className="reasons">
        <div className="reason-l">
            <img className='image1' src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
                    
        </div>
        <div className="reason-r">
              <span>Some reasons</span>
              <div>
                <span className="Stroke-text">Why</span>
                <span>Chose us?</span>
              </div>
              <div className="details">
                <div>
                  <img src={tick} alt="" />
                  <span>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
                <div>
                  <img src={tick} alt="" />
                  <span>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
                <div>
                  <img src={tick} alt="" />
                  <span>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
                <div>
                  <img src={tick} alt="" />
                  <span>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
              </div>
      </div>
      </div>
      

    )
}

export default resons