import React from 'react'
import Link from 'next/link'
import styles from '../styles/searchresults.module.scss'
export default function Searchresults({item}) {
    if(!item ) return null
  return (
    <><Link className={styles.results} href='#'>{item.name}</Link></>
  )
}
