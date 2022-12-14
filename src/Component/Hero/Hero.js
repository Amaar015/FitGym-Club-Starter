import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import hero_image from './../../assets/hero_image.png'
import hero_back from './../../assets/hero_image_back.png'
import heart from './../../assets/heart.png'
import calories from './../../assets/calories.png'
const Hero = () => {
  return (
       <div className="hero">
               <div className="left-hero">
                     <Header/>
                     <div className="best-add">
                        <div></div>
                        <span>The Best fitness club in the town</span>
                     </div>

                     <div className="hero-text">
                        <div>
                                <span className='Stroke-text'>Shape</span>
                                <span> Your</span>

                        </div>
                        <div>
                                <span>ideal body</span>
                        </div>
                        <div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Unde sed modi facilis culpa cupiditate ea vel!</span>
                        </div>
                        </div>
                       
                        <div className="figures">
                                <div>
                                        <span>+140</span>
                                        <span>Expert Coachee</span>
                                </div>
                                <div>
                                        <span>+140</span>
                                        <span>Expert Coachee</span>
                                </div>
                                <div>
                                        <span>+140</span>
                                        <span>Expert Coachee</span>
                                </div>
                        </div>
                        <div className="hero-buttons">
                                <button className="btn">Get Started</button>
                                <button className="btn">Learn More</button>
                                </div>                     
               </div>
               <div className="right-hero">
                <button className='btn'>Join Now</button>
              <div className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart rate</span> <span>201 bpm</span>
              </div>
              <img src={hero_image} className='hero-image' alt="" />
               <img src={hero_back} className='hero-back' alt="" />
               <div className="calories">
                <img src={calories} alt="" />
                <div>
                <span>Calories burned</span>
                 <span>220 kcal</span>
                </div>
               </div>
               </div>
       </div>
    )
}

export default Hero