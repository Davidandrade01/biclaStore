import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/slides.module.scss'

export const Slides = () => {
    const State = {
        display: true,
        width: 800
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
          <img className={styles.imgfit} src="/images/advertising/adv1.png" alt="" />
        </div>
        <div>
        <img  className={styles.imgfit}src="/images/advertising/adv2.png" alt="" />
        </div>
        <div>
        <img className={styles.imgfit}src="/images/advertising/adv4.png" alt="" />
        </div>
        <div>
        <img className={styles.imgfit}src="/images/advertising/adv5.png" alt="" />
        </div>
        
        
      </Slider>
    </div>
  
  )
}

