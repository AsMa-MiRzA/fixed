import Image from "next/image";
import React from "react";
import P10 from "/public/p10.png";
import P5 from "/public/p5.png";
import Shoes2 from "/public/shoes2.jpg";
import Jewelry1 from "/public/jewelry1.jpg";
import Link from "next/link";
const Categories = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Categories
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Categories start here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* category1 */}
        <div className="mb-7 w-[300px] h-[400px] lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/tops"}>
            <Image
              src={P10}
              alt="top"
              className="rounded-xl duration-500 group-hover:scale-125 w-full h-full object-cover"
            />

            <div className="hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Tops</h1>
            </div>
            <div className="block lg:hidden  absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Tops</h1>
            </div>
          </Link>
        </div>

        <div className="mb-7 w-[300px] h-[400px] lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"trousers"}>
            <Image
              src={P5}
              alt="trouser"
              width={355}
              height={355}
              className="rounded-xl duration-500 group-hover:scale-125 w-full h-full object-cover"
            />

            <div className="hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Trousers</h1>
            </div>
            <div className="block lg:hidden  absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Trousers</h1>
            </div>
          </Link>
        </div>
        <div className="mb-7 w-[300px] h-[400px] lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shoes"}>
            <Image
              src={Shoes2}
              alt="shoes"
              width={550}
              height={550}
              className="rounded-xl duration-500 group-hover:scale-125 w-full h-full object-cover"
            />

            <div className="absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>
            <div className="block lg:hidden  absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>
          </Link>
        </div>
        <div className="mb-7 w-[300px] h-[400px] lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"jewelry"}>
            <Image
              src={Jewelry1}
              alt="jewelry"
              width={310}
              height={310}
              className="rounded-xl duration-500 group-hover:scale-125 w-full h-full object-cover"
            />

            <div className="hidden lg:block absolute -bottom-24  group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">jewelry</h1>
            </div>
            <div className="block lg:hidden  absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">jewelry</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
