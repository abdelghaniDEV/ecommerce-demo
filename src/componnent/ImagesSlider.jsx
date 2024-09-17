import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ImagesSlider() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
    
  return (
    <div>
        <Carousel responsive={responsive} infinite={true}  >
        <div className='relative'>
            <img src='https://demo-unsen.myshopify.com/cdn/shop/files/Untitled-1Artboard_9.jpg?v=1658742716&width=400' />
            {/* <i class='bx bx-image text-[25px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#868686]'></i> */}
        </div>
        <div>
            <img src='https://demo-unsen.myshopify.com/cdn/shop/files/Untitled-1Artboard_3.jpg?v=1658742716&width=400' />
        </div>
        <div>
            <img src='https://demo-unsen.myshopify.com/cdn/shop/files/Untitled-1Artboard_8.jpg?v=1658742716&width=400' />
        </div>
        <div>
            <img src='https://demo-unsen.myshopify.com/cdn/shop/files/Untitled-1Artboard_2.jpg?v=1658742716&width=400' />
        </div>
        <div>
            <img src='https://demo-unsen.myshopify.com/cdn/shop/files/Untitled-1Artboard_7.jpg?v=1658742716&width=400' />
        </div>
        <div>
            <img src='https://demo-unsen.myshopify.com/cdn/shop/files/Untitled-1Artboard_4.jpg?v=1658742715&width=400' />
        </div>
      </Carousel>
    </div>
  )
}

export default ImagesSlider