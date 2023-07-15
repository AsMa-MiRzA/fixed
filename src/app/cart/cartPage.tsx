"use client" ;
import React from 'react'
import { Button } from '../../../components/ui/button';
import CartCard from '../../../components/ui/cartCard';
import { useAppSelector } from '../store/hooks';

const CartPage = () => {
    const cartArray = useAppSelector((state)=> state.cart);
    const total = cartArray.reduce((total,arr) => {return (total+(arr.price-(arr.price*arr.discount)/100)*arr.qty)},0)
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1'>
    {/* items */}
    <div className='col-span-2'>
        <CartCard/>
        
    </div>

    {/* summary */}
    <div className='bg-myBlackHead/5 p-5 rounded-xl'>
        {/* heading */}
        <h2 className='scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackHead'>Order Summary</h2>
        {/* divider */}
        <div className='divider mt-0 mb-1'></div>
        {/* pricing */}
        <div className='text-sm font-medium tracking-tight text-myBlackPara'></div>
        {/* product prices */}
        <div className='flex items-center justify-between capitalize'>
            <h2>sub total</h2>
            <h2>${total}</h2>
        </div>
        {/* delivery charges */}
        <div className='flex items-center justify-between capitalize'>
            <h2>delivery charges</h2>
            <h2>tBD</h2>
        </div>
        {/* service charges */}
        <div className='flex items-center justify-between capitalize'>
            <h2>sales tax</h2>
            <h2>TBD </h2>
        </div>
        {/* divider */}
        <div className='divider mt-0 mb-1'></div>
        {/* estimatedtotal */}
        <div className='flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-myBlackPara'>
            <h2>estimated total</h2>
            <h2>${total}</h2>
        </div>
        {/* divider */}
        <div className='divider mt-0 mb-1'></div>
        {/* chechout button */}
        <div className='flex items-center justify-center w-full'>
            <Button className='bg-myBlackHead text-myWhite hover:bg-transparent duration-300 hover:text-myBlackHead scroll-m-20 text-xs hover:shadow-md uppercase font-semibold tracking-tight rounded-xl'>
                proceed to checkout
            </Button>
        </div>
        {/* divider */}
        <div className='divider mt-0 mb-1'></div>
        {/* note */}

        <p className='font-semibold tracking-tight text-sm text-myBlackHead w-[97%] text-center italic'>
            {'*Delivery Charges and the Sales Tax will be calculated in the Checkout Page.'}
        </p>




    </div>
</div>
  )
}

export default CartPage