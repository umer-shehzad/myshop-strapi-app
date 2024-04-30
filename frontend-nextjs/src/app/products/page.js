"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Page = () => {
  const [products, setProducts] = useState([]);
  const urlhost = 'http://localhost:1337';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/products?populate=*');
        console.log('id', response.data.data[1].id);
        console.log('attri', response.data.data[1].attributes);
        console.log('url', `${urlhost}${response.data.data[1].attributes.image.data.attributes.url}`);
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.map(product => (
              <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg h-full">
                  {product.attributes.image.data && (
                    <img className="h-64 rounded m-auto mb-8" src={`${urlhost}${product.attributes.image.data.attributes.url}`} alt={product.attributes.title} />
                  )}
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.attributes.category}</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product.attributes.title}</h2>
                  <div className='hidden bg-blue-800 bg-red-800 bg-black bg-green-800'></div>
                  <button className={'border-2 border-gray-200 ml-1 rounded-full w-6 h-6 focus:outline-none ' + `bg-${product.attributes.color}-800`}></button>
                  <p className="leading-relaxed text-base">{product.attributes.discription}</p>
                  <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
