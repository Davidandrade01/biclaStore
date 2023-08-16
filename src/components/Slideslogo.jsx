import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/slides.module.scss'

export const Slideslogo = () => {
    const State = {
        display: true,
        
      };
      
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        };
  return (
    
    
 
   
   
    <div
      className={styles.container}
    >
      <Slider {...settings} className={styles.slide_box}>
        <div>
          <img  src="/images/logolg/logoscott.png" alt="Logo Scott" />
        </div>
        <div>
        <img  src="/images/logolg/logospecialized.png" alt="logo specialized" />
        </div>
        <div>
        <img src="/images/logolg/logocube.png" alt="Logo Cube" />
        </div>
        <div>
        <img src="/images/logolg/logocaloi.png" alt="logo Caloi" />
        </div>
        <div>
          <img  src="/images/logolg/logopinarello.png" alt="logo Pinarello" />
        </div>
        <div>
          <img  src="/images/logolg/logobianchi.png" alt="logo Bianchi" />
        </div>
        <div>
          <img  src="/images/logolg/logocannyon.png" alt="logo Canyon" />
        </div>
       
      
        
        
      </Slider>
    </div>
  
  )
}

