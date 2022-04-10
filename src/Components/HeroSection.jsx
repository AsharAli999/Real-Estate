import React from 'react';
import './HeroSection.css';



const HeroSection = () => {
  return <>
    <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted></video>
        <h1 className=''>ADVENTURE AWAITS</h1>
        <p class="h1">WHAT ARE YOU WAITING FOR?</p>

        <button type="button" class="btn btn-outline-light mt-4"><h3>GET STARTED</h3></button>
<button type="button" class="btn btn-outline-light mt-4"><h3>WATCH LATER</h3></button>

        </div> 



  </>;
};

export default HeroSection;
