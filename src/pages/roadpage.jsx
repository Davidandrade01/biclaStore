import React from 'react'

//components
import data from '../api/data'
import ProductCard from '../components/ProductCard'
import Deliveryfeatures from '../components/Deliveryfeatures'
import Image from 'next/image'


export default function roadpage() {
  return (
    <>
    
      <Deliveryfeatures/>

      {data.products.map((bike) => (
        <div>
         <ProductCard bike={bike} key={bike.id}/>
        </div>
      ))}
       
      
    </>
  )
}
