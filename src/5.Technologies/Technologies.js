import React, { useEffect } from "react";
import { images } from "./Imported-Images";
import "swiper/css/bundle";
import { motion } from "framer-motion";
import OwlCarousel from "react-owl-carousel";

const Technologies = () => {
  useEffect(() => {}, []);

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
            <OwlCarousel
              autoplayTimeout={3000}
              dotsEach
              fluidSpeed
              autoplaySpeed={2000}
              className="owl-theme"
              items={5}
              loop
              margin={4}
              autoplay={true}
              nav
            >
              {images.map((item) => (
                <div className="item border" key={item.img}>
                  <img src={item.img} alt="...." />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
