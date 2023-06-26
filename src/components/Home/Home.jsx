import React from "react";
import "./Home.scss"
import videoBg from "../../assets/videoBg.mp4"
import imgHeader from "../../assets/Text-14.png"
import ParallaxBg from "../../shared/ParallaxBg/ParallaxBg";
import Squares from "../../shared/Squares/Squares";




const Home = () => {

  return (
    <>
      <div className="container">
        <div className="backgoundParallaxBlack">
          <ParallaxBg Background="black"></ParallaxBg>
        </div>
        <div className="video-wrapper">
          <video loop width="100%" height="100%" preload="auto" autoPlay muted>
            <source src={videoBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="header">
            <img src={imgHeader} alt="" />
          </div>
        </div>

        <div className="backgoundParallaxRed">
          <ParallaxBg Background="red"></ParallaxBg>
        </div>

        <Squares></Squares>
      </div>
    </>
  );
};

export default Home;
