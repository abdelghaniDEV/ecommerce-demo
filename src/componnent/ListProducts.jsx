import React, { useEffect, useState } from "react";
import AddtoCart from "./AddtoCart";
import ProductCart from "./ProductCart";
import { current } from "@reduxjs/toolkit";
import Notification from "./Notification";


function ListProducts({ products }) {


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  })
  //paginastion 
  const items = 15 ;
  const [Current , setCurrent] = useState(1)
  const [leading , setLoading] = useState(true)
  const numberPage = Math.ceil(products.length / items);
  
  const startIndex = (Current - 1) * items;
  const endIndex = startIndex + items

  const DataPge = products.slice(startIndex , endIndex);
  
  const cuurentPageClick = (e) => {
    // Remove the 'active-number-page' class from all elements
    document.querySelectorAll(".active-number-page").forEach(element => {
        element.classList.remove('active-number-page');
    });

    // Add the 'active-number-page' class to the current page element
    

    // Determine which button was clicked and update the current page
    if (e.target.classList.contains("increment")) {
        if (Current < numberPage) {
            setCurrent(Current + 1);
        }else{
          setCurrent(1)
        }
    } else if (e.target.classList.contains("decrement")) {
        if (Current > 1) {
            setCurrent(Current - 1);
        }
    } else {
        setCurrent(Number(e.target.innerText)); // Ensure that innerText is converted to a number
    }

};

  return (
    <div>
       
      {" "}
      <div className="grid grid-cols-2 gap-3 md:gap-6 container mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative">
        {DataPge.map((item) => {
            return <ProductCart key={item.id} product={item} />;
            {/* return <> {leading ? <div className="flex flex-col gap-2 box-prod">
        <div className="  w-max-[205px]  h-max-[261px] bg-slate-100 relative">
          <div className="flex gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="w-5 h-5 rounded-full animate-pulse bg-[#F5CAAB]"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-[#F5CAAB]"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-[#F5CAAB]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div
            
            className="text-[14.8px] leading-[1.3] h-5 w-full bg-slate-100 animate-pulse rounded-[20px] "
          >
          </div>
          <div className="flex gap-3 items-center pt-2">
            <span className="text-[#696969] text-[20px] h-4 w-[80px] bg-slate-100 animate-pulse rounded-[20px]">
            </span>
            <span className="text-[red] text-[14px] line-through h-4 w-[60px] bg-slate-100 animate-pulse rounded-[20px]">
            </span>
          </div>
        </div>
      </div> : <ProductCart key={item.id} product={item} />} </> */}
        })} 
        <AddtoCart /> 
      </div>
      <div className="flex items-center justify-center gap-2">
           <i className='bx bx-chevron-left text-[20px] cursor-pointer decrement' onClick={(e) => cuurentPageClick(e)}></i>  
           {Array.from({length:numberPage}, (_, i) => i + 1).map((page) => {
             return <button className="text-sm h-8 w-8 " id={`id-${page}`}  key={page} onClick={(e) => cuurentPageClick(e)}>{page}</button>
           })}
           <i className='bx bx-chevron-right text-[20px] cursor-pointer increment' id="" onClick={(e) => cuurentPageClick(e)}></i> 
        </div>
    </div>
  );
}

export default ListProducts;
