import React from 'react'

import style from '../styles/hero.module.scss'
export default function 
div() {
  return (
    <>
        <div className={style.container}>

          <div className={style.img_card}>
            <p className={style.paragraph}>Make Your Choice</p>
        </div>
        
        
        <div className={style.img_card}>
          <img className= {style.imgfit} src="/images/bikes/pedals.png" alt="pedals"  />
          <div className={style.span_box}>
            <span className={style.span1}>Customize your</span>
            <span className={style.span2}>Bicla</span>
            
            </div>
            <span className={style.span3}>Here!</span>
          
        </div>

        <div className={style.img_card}>
          <img className= {style.imgfit} src="/images/bikes/gravel.jpg" alt="Gravel Bike" />
          <span>Gravel</span>
        </div>

        <div className={style.img_card}>
          <img className= {style.imgfit} src="/images/bikes/road.jpg" alt="Road Bike" />
          <span>Road</span>
        </div>

        <div className={style.img_card}>
          <img className= {style.imgfit} src="/images/bikes/mountain.jpg" alt="Mountain Bike" />
          <span>Mountain</span>
        </div>

        
    </div>

    <div className={style.container2}>

    <div className={style.img_card}>
          <img className= {style.imgfit2} src="/images/bikes/urban.jpg" alt="Urban Bike" />
          <span>urban</span>
        </div>


    </div>


    <div className={style.container}>

    <div className={style.img_card}>
          <img className= {style.imgfit} src="/images/bikes/argontt.jpg" alt="TT bike" />
          <span>T T</span>
        </div>

        <div className={style.img_card}>
          <img className= {style.imgfit} src="/images/bikes/kids.jpg" alt="Kids bike" />
          <span>kids</span>
        </div>
        
    </div>


    <div className={style.container2}>

<div className={style.img_card}>
      <img className= {style.imgfit2} src="/images/bikes/bmx.jpg" alt="Bmx bike" />
      <span>Bmx</span>
    </div>


</div>
    </>
  )
}
