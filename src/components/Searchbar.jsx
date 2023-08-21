//React
import Link from 'next/link';
import React, { useState } from 'react';

//Styles
import styles from '../styles/searchbar.module.scss'; 

//Components
import { GoSearch } from 'react-icons/go';
import data from '../api/data';


import Searchresults from './Searchresults';



export default function Searchbar() {
  const [busca, setBusca] = useState('');
  console.log(busca);

  const filteredBikes = data.products.filter((item) =>
    item.name.toLowerCase().includes(busca.toLowerCase())

    
  );

  function handleChange(e){
    
    const {value}=e.target
    
    setBusca(value);
    
    }
 
  return (
    <div className={styles.container}>
      <button>
        <GoSearch size={24} color="#686F74" />
      </button>

      <input
        type="search"
        value={busca}
        onChange={handleChange}
      />
      
      <ul className={styles.search_results}>
        {filteredBikes.map((item) => (
          
          <Searchresults key={item.id} item={item}/>
          
        ))}
      </ul>
      
    </div>
  );
}