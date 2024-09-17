import React, { useEffect } from "react";
import iconSucess from "../images/system-solid-31-check-hover-check (1).gif";
import imgThankYou from '../images/thank-you.png'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletALLItems } from "../rtlk/slices/cart-slices";

function SucessPayent() {
    const dispatch = useDispatch()
    useEffect (() => {
       dispatch(deletALLItems())
    },[])
  return (
    <div className="flex items-center justify-center py-[80px] container">
      <div className="flex flex-col items-center  ">
        <div className="flex items-center flex-col">
          <img src={iconSucess} className="w-[100px] h-[100px] items-center" />
          
        </div>
        <div className="flex items-center flex-col gap-2 md:gap-3">
          <h1 className="text-[25px] md:text-[30px] font-[500]">Your Payment is Successful</h1>
          <p className="md:w-[80%] text-center md:text-[18px] md:leading-[25px]">
            Thank Your For Your Payment, An automated Payment receipt will be
            sent to your registered email{" "}
          </p>
          <Link to={'/'}  className="py-3 px-4 bg-[#F5CAAB] font-[450] text-center mt-3 flex items-center gap-2"> <i class='bx bxs-left-arrow-circle text-[30px]'></i>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default SucessPayent;
