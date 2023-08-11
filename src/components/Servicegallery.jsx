import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/servicegallery.module.scss'

export default function Servicegallery() {
  return (
    <div className={styles.container}>

        <Link  href="#">
          <div className={styles.service_box}>
            <div className={styles.img_box}>
              <img className = {styles.imgfit}src='/images/servico/coroa.png'  alt='coroa'/>
          
            </div>
            <span>Parts</span>
          
          </div>
        </Link>


        <Link href='#'>
          <div className={styles.service_box}>
            <div className={styles.img_box}>
              <img className = {styles.imgfit}src='/images/servico/tool.png'  alt='Multitools'/>
            </div>
            <span>Tools</span>
          
          </div>
        </Link>

        <Link href='#'>
          <div className={styles.service_box}>
            <div className={styles.img_box}>
              <img className = {styles.imgfit} src='/images/servico/workshop.png' alt='Workshop'/>
            </div>
            <span>Workshop</span>
          
          </div>
        </Link>

        <Link href='#'>
          <div className={styles.service_box}>
            <div className={styles.img_box}>
              <img className = {styles.imgfit} src='/images/servico/jersey.png' alt='jerey'/>
            </div>
            <span>Jersey</span>
          
          </div>
        </Link>


    </div>
  )
}
