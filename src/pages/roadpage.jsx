import React from 'react'
import Link from 'next/link';

// icon
import {IoIosArrowBack} from 'react-icons/io'
//components
import data from '../api/data'
import ProductCard from '../components/ProductCard'
import Deliveryfeatures from '../components/Deliveryfeatures'
import Image from 'next/image'

//styles
import styles  from '../styles/road.module.scss'

export default function roadpage() {

  {/*const mountainProducts = data.products.filter(bike => bike.category === "Mountain"); Regra alternativa para renderização condicional*/}

  return (
    <>
    
      <Deliveryfeatures/>
     
      
      
        
        <Link className={styles.back} href="/"> 
        
          <IoIosArrowBack/>
          <span> Home</span>
        
        </Link>
        
        <div className={styles.category_page}>
       <span> Road</span>
        </div>
      
      {data.products.map((bike) => (
       
       bike.category === "Road" &&(
      
        <div>
         <ProductCard bike={bike} key={bike.id}/>
        </div>
        
       )
      ))}
       
    
    </>
  )
}
