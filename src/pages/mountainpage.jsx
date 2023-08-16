import React from 'react'
import Link from 'next/link';


// icon
import {IoIosArrowBack} from 'react-icons/io'
//components
import data from '../api/data'
import ProductCard from '../components/ProductCard'
import Deliveryfeatures from '../components/Deliveryfeatures'
import Image from 'next/image'
import { Slideslogo } from '@/components/Slideslogo';
import Socialbar from '@/components/Socialbar';

//styles
import styles  from '../styles/moutain.module.scss'


export default function Mountainpage() {

  {/*const mountainProducts = data.products.filter(bike => bike.category === "Mountain"); Regra alternativa para renderização condicional*/}

  return (
    <>
    
      <Deliveryfeatures/>
     
      
      <Slideslogo/>
        
        <Link className={styles.back} href="/"> 
        
          <IoIosArrowBack/>
          <span> Home</span>
        
        </Link>
        
        <div className={styles.category_page}>
       <span> Mountain</span>
        </div>
      
      {data.products.map((bike) => (
       
       bike.category === "Mountain" &&(
      
        <div>
         <ProductCard bike={bike} key={bike.id}/>
        </div>
        
       )
      ))}
       
    <Socialbar/>
    </>
  )
}
