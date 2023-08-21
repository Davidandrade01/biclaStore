import data from '../../api/data'
import { useRouter } from 'next/router'
import React from 'react'

const ItemDetails = () => {
  const router = useRouter();
  console.log(router)
  const  cacete  = Number(router.query.detail);// Aqui converti para a busca da query para number, pois o array data nao possui "" nos id´s . E entrei no objeto (query.detail)da query para em seguida igualar com a constante item.
  const item = data.products.find(item => item.id === (cacete));

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
      <h2>Item Details</h2>
      
      <h1>{item.name}</h1>
      <p>{item.shortdescription}</p>
    </div>
  );
};

export default ItemDetails;


