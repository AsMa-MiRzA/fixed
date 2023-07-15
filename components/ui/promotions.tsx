import React from 'react'


const Promotions = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
        {/* Heading*/}
        <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Promotions
        </h1>
       
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Promotion starts here */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* first child */}
        <div className="hero h-[25rem] promo-1 rounded-xl">
  <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="uppercase scroll-m-20 text-4xl font-semibold tracking-tight text-myWhite">Get Upto <span className='text-myOrange'> 60% </span> Off</h1>
      <p className="scroll-m-20 text-base font-medium tracking-tight text-myWhite mt-2">Flash Sale , get upto 60% on the Season Varient </p>
   
    </div>
  </div>
</div>
         {/* second child */} 
        <div className="hero h-[25rem] promo-2 rounded-xl">
  <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="uppercase scroll-m-20 text-4xl font-semibold tracking-tight text-myWhite">Get Upto <span className='text-myOrange'> 30% </span> Off</h1>
      <p className="scroll-m-20 text-base font-medium tracking-tight text-myWhite mt-2">Flash Sale , get upto 30% on the New Men's Wear </p>
   
    </div>
  </div>
</div>
</div>
</div>
     
      
  )
}

export default Promotions