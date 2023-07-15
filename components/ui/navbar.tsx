"use client"
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavigationMenuDemo } from './navlinks'
import Logo from '/public/Logo.webp'
import Image from 'next/image'
import { useAppSelector } from '@<prefix>/app/store/hooks'
const Navbar = () =>{
    const cart = useAppSelector((state) =>state.cart);
    return (
        <div>
            <div className="navbar bg-myWhite" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="p-0 text-2xl lg:hidden cursor-pointer text-myBlackHead hover:text-myOrange">
                           <GiHamburgerMenu />
                        </label>
                        <ul tabIndex={0} 
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow font-semibold text-red-700 bg-base-100 rounded-box w-52 z[100] ">

                            <li>
                                <Link href={'/home'}>Home</Link>
                                </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Women</summary>
                                    <ul className="p-2">
                                        <li>
                                            <Link href={'/tops'}>Tops</Link>
                                        </li>
                                        <li>
                                            <Link href={'/trousers'}>Trousers</Link>
                                        </li>
                                        <li>
                                            <Link href={'/jewelry'}>Accessories/Jewlery</Link>
                                        </li>
                                        <li>
                                            <Link href={'/shoes'}>Shoes</Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link href={'/aboutUs'}>About</Link>
                            </li>
                            <li>
                                <Link href={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <Image src={Logo} alt='logo' className='hidden lg:block'/>
                </div>
                <div className="navbar-center ">
                <Image src={Logo} alt='logo' className='block lg:hidden'/>
                    <div className="hidden lg:flex">
                        <NavigationMenuDemo/>
                    </div>
                </div>
                <div className="navbar-end">
        <Link href= {'/cart'}>       
      <label tabIndex={0} className="pr-4 cursor-pointer group ">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:text-myOrange duration-300"
           fill="none" 
           viewBox="0 0 24 24"
            stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cart.length>0 && (

     <span className="badge badge-sm indicator-item bg-myOrange text-myWhite group-hover:text-myWhite group-hover:bg-myBlackPara">
            {cart.length}
            </span>
            )}
        </div>
      </label>
      </Link>
  
    
                </div>
            </div>
        </div>
    )
}

export default Navbar;