'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

interface Product {
    _id: string;
    image: string;
    title: string;
    description: string;
    price: number;
    brand: string;
  }

export default function ProductCard() {
  const [productCard, setProductCard] = useState<Product[]>([]);

  const getProductCards = async () => {
    try {
      const res = await axios.get('http://localhost:8000/productcard');
      setProductCard(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductCards();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        {/* TITLE */}
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productCard.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//   title,
//         description,
//         price,
//         image,
//         category,