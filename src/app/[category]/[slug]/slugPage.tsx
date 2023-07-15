"use client";

import { FaShoppingCart, FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { Button } from "../../../../components/ui/button";
import SlugComponent from "../../../../components/ui/slugComponent";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { addToCart } from "@<prefix>/app/store/features/cart";

const SlugPage = ({ params }: any) => {
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val)=> val.slug == params.slug);
  const dispatch = useAppDispatch()
  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image[0],
    slug: slug[0].slug,
    discount: slug[0].discount,
    category: slug[0].category,
    price: slug[0].price,
    size: slug[0].size[0],
    qty: slug[0].qty,
    colour: slug[0].colour[0],
    
  });


  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image */}
          <SlugComponent image={slug[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* category*/}
            <h2 className=" scroll-m-20 text-sm font-semibold text-gray-500 tracking-widest uppercase">
              {slug[0].category}
            </h2>
            {/* title/heading */}

            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead mb-1">
              {slug[0].title}
            </h1>
            {/* rating */}
            <div className="rating rating-sm mt-2">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
            </div>

            {/* description */}
            <p className="mt-2 lading-relaxed text-myBlackPara scroll-m-20 text-base font-normal">
              {slug[0].description}
            </p>
            <div className="flex mt-6 items-center mb-5">
              <div className="flex">
                {/* colours */}
                <span className="mr-3 scroll-m-20 font-semibold text-base tracking-tight text-myBlackHead">
                  Color
                </span>
                {slug[0].colour.map ((item, i) => (
                  <button
                    key={i}
                    onClick={()=> setCartItem({...cartItem,colour:item })}
                    className="border-2 border-gray-300 mr-1  rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black "
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>
              {/* sizes */}
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 font-semibold text-base tracking-tight text-myBlackHead">
                  Size
                </span>

                <div className="form-control w-full max-w-xs">
                  <select onChange ={(e) => setCartItem({...cartItem, size:e.target.value })}
                  className="select select-bordered">
                    <option disabled defaultValue={"select size"}>
                      Select Size
                    </option>
                    {slug[0].size.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* quantity */}
            <div className="flex items-center ">
              <span className="mr-3 scroll-m-20 font-semibold text-base tracking-tight text-myBlackHead">
                Quantity
              </span>
              <Button
              onClick={() =>
              setCartItem({...cartItem,qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,})
            } 
            className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-sm font-semibold tracking-tight rounded-xl w-fit h-fit duration-300">
                <FaMinus className=" h-4 w-4 group-hover:text-myOrange duration-300" />
                
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-bs font-semibold tracking-tight">
                {cartItem.qty}
              </div>
              <Button 
              onClick={() =>
              setCartItem({...cartItem,qty:++cartItem.qty})
            } 
            className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-sm font-semibold tracking-tight rounded-xl w-fit h-fit duration-300">
                <FaPlus className=" h-4 w-4 group-hover:text-myOrange duration-300" />
                
              </Button>
            </div>
            {/* divider */}
            <div className="divider"></div>

            <div className="flex items-center justify-between">
              {/* price */}
              {/* cartItem.discount !== undefined && ( */}
                <div>
                  <span
                    className={`scroll-m-20 font-semibold text-2xl tracking-tight text-myBlackHead ${
                      cartItem.discount > 0 &&
                       "line-through decoration-2 decoration-myOrange/70"
                    } `}
                  >
                    {/* {`price: $${cartItem.price * cartItem.qty}`} */}
                    ${cartItem.price * cartItem.qty}
                  </span>
                  {cartItem.discount > 0 && (
                    <span className=" ml-3 scroll-m-20 font-semibold text-2xl tracking-tight text-myBlackHead">
                      $
                      {(cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty}
                    </span>
                  )}
                </div>
              {/* ) */}
              {/* button/add to cart */}
              <Button onClick= {()=>dispatch(addToCart(cartItem))}
              className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-sm font-semibold tracking-tight rounded-xl">
                <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add To Cart
              </Button>
            </div>
            {/* button/buy now */}
            <Button className="mt-3 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-sm font-semibold tracking-tight rounded-xl">
              <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
