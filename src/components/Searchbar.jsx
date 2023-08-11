import React from 'react'

import{GoSearch} from 'react-icons/go'

import styles from '../styles/searchbar.module.scss'

export default function Searchbar() {
  return (

    <div className={styles.container}>
        
            <button>
                <GoSearch size={24} color="#686F74" />
            </button>
        
        
            <input type="search" />
       
    </div>
  )
}
