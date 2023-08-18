import data from '../../api/data'
import { useRouter } from 'next/router'
import React from 'react'

const ItemDetails = () => {
  const router = useRouter();
  const  {cacete}  = router.query;
  const item = data.products.find(item => item.id === (cacete));

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div>
      <h2>Item Details</h2>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetails;


