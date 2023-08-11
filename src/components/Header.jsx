import React from 'react'
import styles from '../styles/header.module.scss'

import {GiHamburgerMenu} from 'react-icons/gi'

import Searchbar from './Searchbar'

export default function Header() {
  return (
    <div className={styles.container}>
      
      <div className={styles.logo_box}>
      <div className={styles.icon}>
        <GiHamburgerMenu size={24} color='#fff'/>
      </div>
        <div className={styles.logo}>Biclastore</div>
        <div className={styles.lang_box}>
      <span>En</span>
      <span>Pt</span>
      </div>
      </div>
      
      <Searchbar/>
    </div>
  )
}
