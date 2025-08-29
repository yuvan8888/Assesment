import React from 'react'
import { useState,useEffect } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const APIfetch = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
    };
    useEffect(() => {
        APIfetch();
    }, []);
  return (
    <div className='p-10 grid grid-cols-3 gap-6'>
        {products.map((product) => (
            <div className='border p-4 rounded-lg shadow-lg align-center justify-center bg-gradient-to-b bg-gray-500 text-s text-white block' key={product.id}>
            <p>{product.id} </p>
            <img src={product.thumbnail} className='h-40 w-40 ' />
            <p>{product.title}</p>
            <p>${product.price} </p>
            <p>{product.rating.rate}({product.rating.count} reviews) </p>
            <p>{product.category} </p>
            </div>
        ))}
    </div>
  )
}

export default ProductList