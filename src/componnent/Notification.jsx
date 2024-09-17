import React from "react";
import "../App.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { showNotifSclice } from "../atoms/ShowNotifi";
import { AnimatePresence, motion } from "framer-motion";

function Notification({textNoti , Icon , title }) {
  const [showNoti, setShowNoti] = useRecoilState(showNotifSclice);

  // if (showNoti === true) {
  //   function myFunction() {
  //     var x = document.getElementById("snackbar");
  //     x.classList.replace("hidden", "block");
  //     setTimeout(function () {
  //       // x.className = x.className.replace("block", "hidden");
  //       setShowNoti(false);
  //     }, 2000);
  //   }

  //   myFunction();
  // }

  // const item = {
  //   exit: {
  //     opacity: 0,
  //     y: "100vh",
  //     transition: {
  //       ease: "easeInOut",
  //       duration: 0.3,
  //       // delay: 1.2,
  //     },
  //   },
  // };

  return (
    <>
      <div
            // variants={item}
            // initial={{ y: "100vh", opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ duration: 0.5 }}
            // exit="exit"
            className="pointer-events-auto w-[350px] max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 mb-"
          >
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                      {Icon}
                </div>
                <div className="ml-3 w-0 flex-1  gap-1pt-0.5">
                  <h1 className="font-medium">{title}</h1>
                  <p className="text-sm font-medium text-[#198754]">
                    {textNoti}
                  </p>
                  
                  {/* <p className="mt-1 text-sm text-gray-500">File save click here to view folder.</p> */}
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Notification;
