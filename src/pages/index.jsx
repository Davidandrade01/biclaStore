import Head from 'next/head'

import styles from '../styles/home.module.scss'

import Servicegallery from '../components/Servicegallery'
import  {Slides}  from '../components/Slides'
import Herogallery from '../components/Herogallery'
import Deliveryfeatures from '@/components/deliveryfeatures'


export default function Home() {
  return (
    <>
     
      
      <main>
    
    <Servicegallery/>
    <Slides/>
    <Herogallery/>
    <Deliveryfeatures/>
   
      </main>
    </>
  )
}
