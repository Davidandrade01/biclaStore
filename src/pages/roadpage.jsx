import React from 'react'

//components
import data from '../api/data'
import Deliveryfeatures from '../components/Deliveryfeatures'
import Image from 'next/image'


export default function roadpage() {
  return (
    <>
    
      <Deliveryfeatures/>
      
      {data.products.map(function(item) {
      return (
        <div>
          Applicant name:  
          
          <Image src={item.image} width={100} height={100} alt='evo'/>
          
        </div>


      )
    })}

    
    
    </>
  )
}
