import React from 'react'
import './reasons.css'
import image1 from './../../assets/image1.png';
import image2 from './../../assets/image2.png';
import image3 from './../../assets/image3.png';
import image4 from './../../assets/image4.png';
import tick from './../../assets/tick.png';
import adidas from './../../assets/adidas.png';
import nike from './../../assets/nike.png';
import nb from './../../assets/nb.png';

const resons = () => {
  return (
      <div className="reasons" id='reason'>
        <div className="reason-l">
            <img className='image1' src={image1} alt="" />
            <img className='image2' src={image2} alt="" />
            <img  className='image3' src={image3} alt="" />
            <img  className='image4' src={image4} alt="" />
                    
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
              <span style={{
                color:"var(--gray)",
                fontWeight:"bold",
                fontSize:"1.5rem"
              }}>
                OUR PARTNERS
              </span>
              <div className="partners">
                <img src={adidas} alt="" />
                <img src={nb} alt="" />
                <img src={nike} alt="" />
              </div>
      </div>
      </div>
      

    )
}

export default resons