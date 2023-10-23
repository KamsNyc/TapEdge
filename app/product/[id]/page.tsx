'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductOverview from '@/app/components/ProductOverview';

type Props = {
  params: {
    id: string;
  };
};

function Product({ params: { id } }: Props) {
  console.log(id);
  const [productInfo, setProductInfo] = useState<any>([]); // Define a proper type for productInfo

  const getProductInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/product/${id}`);
      setProductInfo(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductInfo();
  }, [id]);

  return (
    <div>
      <ProductOverview productInfo={productInfo} key={productInfo._id} />
    </div>
  )
}

export default Product;
