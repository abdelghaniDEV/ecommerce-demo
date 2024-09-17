import React from "react";
import { useSelector } from "react-redux";
import ListProducts from "../componnent/ListProducts";
import ProductCart from "../componnent/ProductCart";

function Wishlist() {

  const Wishlist = useSelector(state => state.wshlist)

  return (
    <div>
      <div className='w-full h-[20vh] xl:h-[45vh]  mb-[30px] relative  bg-[url("/src/images/bn_shop@4x.png")] bg-cover'>
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center pb-[50px]">
            <h1 className="text-[40px] lg:text-[50px] text-white">Wishlist</h1>
            <div className="flex gap-2 items-center text-[17px] lg:text-[16px] text-white">
              <h2>Home</h2>
              <i className="bx bx-chevron-right"></i>
              <h2 className="text-[#e6e6e6]">Wishlist</h2>
            </div>
          </div>
        </div>
      </div>
      <div> 
        <ListProducts products={Wishlist} />
      </div>
    </div>
  );
}

export default Wishlist;
