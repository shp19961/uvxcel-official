import React from "react";
import HomeServices from "../11.HomeServices/HomeServices";
import { motion } from "framer-motion";
// import homeimg from "./SlidesImages/uvhome.jpeg";
import img1 from "./SlidesImages/img1.jpg";
import img2 from "./SlidesImages/img2.jpg";
import img3 from "./SlidesImages/img3.jpg";

const Home = () => {
  return (
    <>
      <motion.div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active indicators"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="indicators"
            aria-current="true"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="indicators"
            aria-current="true"
            aria-label="Slide 3"
          ></button>
          {/* <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            className="indicators"
            aria-current="true"
            aria-label="Slide 4"
          ></button> */}
        </div>
        <div className="carousel-inner">
          {/* <div className="carousel-item active" data-bs-interval="2400">
            <img src={homeimg} className="d-block w-100 slide-img" alt="..." />
            <div className="carousel-caption d-block d-md-block"></div>
          </div> */}
          <div className="carousel-item active" data-bs-interval="2400">
            <img src={img1} className="d-block w-100 slide-img" alt="..." />
            <div className="carousel-caption d-block d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="2400">
            <img src={img2} className="d-block w-100 slide-img" alt="..." />
            <div className="carousel-caption d-block d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={img3} className="d-block w-100 slide-img" alt="..." />
            <div className="carousel-caption d-block d-md-block"></div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </motion.div>
      <HomeServices />
    </>
  );
};

export default Home;
