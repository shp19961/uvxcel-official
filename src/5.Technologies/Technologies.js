import React, { useEffect } from "react";
import { images } from "./Imported-Images";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { motion } from "framer-motion";

const Technologies = () => {
  useEffect(() => {
    new Swiper(".swiper-container.app-screen", {
      effect: "coverflow",
      loop: true,
      autoplaySpeed: 2000,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: { delay: 2000, disableOnInteraction: true },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      paginationClickable: true,
      coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
      },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="technologies"
    >
      <div className="container">
        <h1 className="text-center py-4 tech-ttl">
          Technologies we provide assistance in
        </h1>
        <div className="row pt-5">
          <div className="col-12">
            <div className="swiper-container app-screen">
              <div className="swiper-wrapper">
                {images.map((item) => (
                  <div className="swiper-slide" key={item.img}>
                    <div className="slider-image">
                      <img src={item.img} alt={item.img} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
