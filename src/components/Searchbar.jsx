import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import data from '../api/data';
import styles from '../styles/searchbar.module.scss'; 
import Link from 'next/link';
import Searchresults from './Searchresults';

export default function Searchbar() {
  const [busca, setBusca] = useState('');
  console.log(busca);

  const filteredBikes = data.products.filter((item) =>
    item.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <button>
        <GoSearch size={24} color="#686F74" />
      </button>

      <input
        type="search"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      
      <ul className={styles.search_results}>
        {filteredBikes.map((item) => (
          
            <Searchresults item={item}/>
          
        ))}
      </ul>
      
    </div>
  );
}