import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showCartsatate } from "../atoms/ShowCart";
import { productShowCartsatate } from "../atoms/ProductShowCart";
import Notification from "./Notification";
import { showNotifSclice } from "../atoms/ShowNotifi";
import {
  addProduct,
  deleteItemWishlist,
  deleteItemWshlist,
} from "../rtlk/slices/wshlist-slice";
import { AnimatePresence, motion } from "framer-motion";

function ProductCart({ product, id }) {
  const [showCart, setShowCart] = useRecoilState(showCartsatate);
  const [productShowCart, setProductShowCart] = useRecoilState(
    productShowCartsatate
  );
  const [showNoti, setShowNoti] = useState(false);
  const [addWshlist, setAddWshlist] = useState(false);
  const [loading, setLoading] = useState(true);
  const wshilst = useSelector((state) => state.wshlist);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handlWshliteClick = (productInWishlist) => {
    if (productInWishlist) {
      dispatch(deleteItemWishlist(product));
    } else {
      dispatch(addProduct(product));
      setShowNoti(true);
    }
  };

  const handlWshlite = () => {
    const productInWishlist = wshilst.find((prod) => prod.id === product.id);

    // تحديد أيقونة القلب والنمط بناءً على وجود المنتج في قائمة الأمنيات
    const iconClass = productInWishlist
      ? "bx bx-heart text-[23px] bg-[#F5CAAB] rounded-full text-white p-1"
      : "bx bx-heart text-[23px] bg-white rounded-full p-1";

    return (
      <i
        className={iconClass}
        id="wshilst"
        onClick={() => handlWshliteClick(!!productInWishlist)}
      ></i>
    );
  };

  const showAddToCart = (product) => {
    setShowCart(true);
    setProductShowCart(product);
  };

  if (showNoti === true) {
    function myFunction() {
      setTimeout(function () {
        // x.className = x.className.replace("block", "hidden");
        setShowNoti(false);
      }, 2000);
    }

    myFunction();
  }

  const item = {
    exit: {
      opacity: 0,
      y: "100vh",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        // delay: 1.2,
      },
    },
  };

  return (
    <>
      <div className="flex flex-col gap-2 box-prod">
        <div className="relative overflow-hidden ">
          <div className="relative">
            {loading && <div className="w-full h-full bg-slate-100 absolute">
              <div className="flex gap-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="w-5 h-5 rounded-full animate-pulse bg-[#F5CAAB]"></div>
                <div className="w-5 h-5 rounded-full animate-pulse bg-[#F5CAAB]"></div>
                <div className="w-5 h-5 rounded-full animate-pulse bg-[#F5CAAB]"></div>
              </div>
            </div>}
            <img
              alt={product.attributes.title}
              src={
                product.attributes.images.data[0].attributes.url
              }
              className="text-sm rounded-[10px]"
            />
          </div>

          {loading === false && (
            <div className="absolute top-[10px] right-[10px] cursor-pointer  ">
              {handlWshlite()}
            </div>
          )}
          {}
          <div className="hidden absolute bottom-0 w-full md:block  btn-add-cart">
            <div className="grid grid-cols-2 text-center  text-[20px]  border-2 cursor-pointer ">
              <button
                onClick={() => showAddToCart(product)}
                className=" bg-[#EBE8E8]  px-[10px] "
              >
                <i className="bx bx-cart"></i>
              </button>
              <Link
                to={`/product/${product.id}`}
                className="bg-white px-[10px]"
              >
                <i className="bx bx-show"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <Link
            to={`/product/${product.id}`}
            className="text-[14.8px] leading-[1.3] "
          >
            {product.attributes.title}
          </Link>
          <div className="flex gap-3 items-center">
            <span className="text-[#696969] text-[20px]">
              ${product.attributes.price}
            </span>
            <span className="text-[red] text-[14px] line-through">
              {product.attributes.discount && `$${product.attributes.discount}`}
            </span>
          </div>
        </div>
        {/* <Notification textNoti={'Successfully added wishlist!'} Icon={<i className="bx bx-check-circle text-[#ff000090] text-[30px]"></i>} /> */}
        <AnimatePresence>
          {showNoti === true && (
            <motion.div
              className="fixed bottom-[20px] left-0 md:left-[5rem]   z-[3000]"
              variants={item}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit="exit"
            >
              <Notification
                textNoti={"Successfully added wishlist!"}
                Icon={
                  <i className="bx bx-heart-circle text-[#198754] text-[30px]"></i>
                }
                title={product.attributes.title}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ProductCart;
