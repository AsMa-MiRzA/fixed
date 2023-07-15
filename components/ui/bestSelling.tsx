"use client"
import React from 'react'
import BestSellingCard from './bestSellingCard';
import { useAppSelector } from '@<prefix>/app/store/hooks';
const BestSelling = () => {
  const product =useAppSelector((state)=>state.products);
  const bestSell = product.slice(0,3);
 
  //   // {
  //   //   src:'/header.webp',
  //   //   alt: 'dress',
  //   //   title: 'Cameryn Sash Tie Dress',
  //   //   description: 'Best Quality Dress',
  //   //   price: 545,
  //   //   category:'dress',
  //   //   slug:'peech-dress',
  //   // },
  //   {
  //     src:'/p9.png',
  //     alt: 'top',
  //     title: 'Top',
  //     description: 'Best Top',
  //     price: 245,
  //     category:'tops',
  //     slug:'sleevless-top',
  //   },
  //   {
  //     src:'/p4.png',
  //     alt: 'trouser',
  //     title: 'Flex Sweat Pants',
  //     description: 'Most Comfortable Trouser',
  //     price: 175,
  //     category:'trouserss',
  //     slug:'flex trouser',
  //   },
  //   {
  //     src:'/shoes.jpg',
  //     alt: 'shoes',
  //     title: "Lady's Heels",
  //     description: 'Elegant Blue Heels',
  //     price: 355,
  //     category:'shoes',
  //     slug:'heels',
  //   },
  //   {
  //     src:'/pend3.jpg',
  //     alt: 'jewelry',
  //     title: 'Pretty Pendants',
  //     description: 'Beautiful Light Jewelry ',
  //     price: 200,
  //     category:'jewelry',
  //     slug:'pendant',
  //   }
  // ];
  return (
    <div className='mb-[100px] mt-[100px]'>
      {/* Heading */}
      <div className="text-center mb-10">
    <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
      Best Selling Products
    </h1>
   
    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
    </div>
  </div>
  {/* Best Selling Products Here */}
 <div className='flex flex-wrap justify-center gap-5'>
  {
    bestSell.map((items:any,i)=>(
      <BestSellingCard
      key={i}
       src={items.image[0]}
        alt ={items.title}
         title={items.title}
          description = {items.description}
           price = {items.price}
           category={items.category}
           slug={items.slug}
           discount={items.discount}
/>    ))
  }

 </div>
    </div>
  )
}

export default BestSelling;