//React
import React from 'react';
import Image from 'next/image';


//styles
import styles from '../styles/productcard.module.scss'





export default function ProductCard({bike}) {
  return (
    <> 
   

    <div className={styles.container}>

    

      <div className={styles.image_box}>
        <p style={{marginBottom:'16px'}} >{bike.name}</p>
        <Image className={styles.img} src={bike.image} width={191} height={144}/>
      </div>
      

      <div className={styles.info_box}>

        <div className={styles.price}>
          {bike.price}
        </div>

        <div className={styles.logo}>
          <img src={bike.logo} />
        </div>

        <div className={styles.description}>
          <p>{bike.shortdescription}</p>
        </div>

        <div className={styles.btn_box} >

        <button className={styles.btn_cta}>Buy</button>
        <button className={styles.btn2}>See more</button>
        

        </div>

      </div>
       
    </div>
    
    </>
  )
}
