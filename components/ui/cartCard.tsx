"use client"
import React from 'react';
import Image from 'next/image';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Button } from './button';
import { useAppDispatch, useAppSelector } from '@<prefix>/app/store/hooks';
import { addCart, delItem, subtractCart } from '@<prefix>/app/store/features/cart';

const CartCard = () => {
    const cartArray = useAppSelector((state)=> state.cart);
    const dispatch = useAppDispatch();
    

  

    return (
        <>

        {cartArray.length >= 1 &&
             cartArray.map((item, i) => (
        <div
        key={i} className="flex px-10 py-3">
            {/* image */}
            <Image
            
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className='w-[100px] h-[100px]'
            />
            {/* some info */}
            <div className='flex px-5 justify-between items-center w-full'>
                <div>
                    {/* title */}
                    <h2 className='test-sm font-semibold leading-none line-clamp-1 text-myBlackHead'>
                        {item.title}
                    </h2>
                    {/* size */}
                    <p className='mt-2 text-sm text-myBlackPara/80 leading-none font-semibold line-clamp-1'>
                        size:&nbsp;<span>{item.size}</span>
                    </p>
                        {/* colour*/}
                        <p className='mt-2 text-sm text-myBlackPara/80 leading-none font-semibold line-clamp-1'>
                        colour:&nbsp;
                        <span>  
                             <button
                    key={i}
               
                    className="border-2 border-gray-300 mr-1  rounded-full focus:outline-none active:border-none focus:border-none w-[15px] h-[15px] "
                    style={{ backgroundColor: item.colour }}
                  />
                  </span>
                    </p>
                    {/* quantity */}
                    <div className='mt-2 flex items-center'>
                        <Button onClick={()=> dispatch(subtractCart(item))}
                         className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300">
                            <FaMinus className='h-2 w-2 group-hover:text-myBlackHead' />
                        </Button>
                        <div className='mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara/80'>
                            {item.qty}
                            </div>
                        <Button onClick={()=> dispatch(addCart(item))}
                        className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300">
                            <FaPlus className='h-2 w-2 group-hover:text-myBlackHead' />
                        </Button>
                    </div>
                    {/* price and delete mbl */}
                    <div className='lg:hidden mt-2 flex flex-col gap-2'>
                        <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead'>
                            <span>Price:&nbsp;</span>
                            &#36;{item.discount>0 
                            ? (item.price -(item.price * item.discount)/100)
                            *item.qty : item.price*item.qty}
                        </h3>
                        <FaTrash 
                        onClick = {()=> dispatch(delItem(item.uuid))}
                        className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer' />

                    </div>

                </div>
            </div>
            {/* price and delete */}
            <div className='hidden lg:flex flex-col items-end gap-5'>
                <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead'>
                    <span>Price:&nbsp;</span>
                    &#36;{item.discount>0 
                            ? (item.price -(item.price * item.discount)/100)
                            *item.qty : item.price*item.qty}
                </h3>
                <FaTrash
                 onClick = {()=> dispatch(delItem(item.uuid))}
                 className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer' />

            </div>


        </div>
    ))}
    </>
    )

};

export default CartCard;