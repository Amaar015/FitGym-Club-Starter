import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import hero_image from './../../assets/hero_image.png'
import hero_back from './../../assets/hero_image_back.png'
import heart from './../../assets/heart.png'
import calories from './../../assets/calories.png'
import {motion} from 'framer-motion';

const Hero = () => {
       const transition={type:'spring', duration:3}
       const mobile=window.innerWidth<=786 ? true:false;
        return (
       <div className="hero">
        <div className="blur blur-h"></div>
               <div className="left-hero">
                     <Header/>
                     <div className="best-add">
                        <motion.div
                        initial={{left:mobile?'165':'238px'}}
                        whileInView= {{left:'8px'}}
                        transition={{...transition,type:'tween'}}
                        >

                        </motion.div>
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
              <motion.div 
                transition={{...transition,type:'spring'}}
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}

              className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart rate</span> <span>201 bpm</span>
              </motion.div>
              <img src={hero_image} className='hero-image' alt="" />
               <motion.img
                transition={{...transition,type:'spring'}}
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
               src={hero_back} className='hero-back' alt="" />
               <motion.div 
                transition={{...transition,type:'spring'}}
                initial={{right:'37rem'}}
                whileInView={{right:'28rem'}}
               className="calories">
                <img src={calories} alt="" />
                <div>
                <span>Calories burned</span>
                 <span>220 kcal</span>
                </div>
               </motion.div>
               </div>
       </div>
    )
}

export default Hero