import React from 'react'
import {FcMoneyTransfer} from 'react-icons/fc'
import {FcShipped} from 'react-icons/fc'
import {FcAssistant} from 'react-icons/fc'
const Services = () => {
  return (
    <section className="body-font mb-[100px] mt-[100px]">
    <div className="container px-5 mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Services
        </h1>
       
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {/* delivery */}
        <div className="group p-4 max-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
           <FcShipped className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className=" text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
              Free Delivery
            </h2>
            <p className="text-myBlackPara group-hover:text-myBlackPara/80 scroll-m-20  text-base font-semibold tracking-tight transition-colors line-clamp-2">
            Free Delivery on Order Above $1000
            </p>
          
             
            
          </div>
        </div>
        {/* service 24/7 */}
        <div className="group p-4 max-auto  lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
           <FcAssistant className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className="capitalize text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl  mb-3">
              24/7 customer services
            </h2>
            <p className="capitalize text-myBlackPara group-hover:text-myBlackPara/80 scroll-m-20  text-base font-semibold tracking-tight transition-colors line-clamp-2">
            For questions and queries please feel free to contact.
            </p>
          
             
            
          </div>
        </div>
        {/* money back */}
        <div className="group p-4 max-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
           <FcMoneyTransfer className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className=" text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
              money back gaurantee
            </h2>
            <p className="capitalize text-myBlackPara group-hover:text-myBlackPara/80 scroll-m-20  text-base font-semibold tracking-tight transition-colors line-clamp-2">
            get money back gaurantree on damaged products.
            </p>
          
             
            
          </div>
        </div>
      </div>
   
    </div>
  </section>
  
  )
}

export default Services