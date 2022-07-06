import React from "react";
import { FaTree, FaAirFreshener, FaHome, FaBellSlash } from "react-icons/fa";
import { BsFillGearFill, BsCloudArrowDownFill } from "react-icons/bs";
import { motion } from "framer-motion";
// import homeimg from "./SlidesImages/uvhome.jpeg";
import img1 from "./SlidesImages/img1.jpg";
import img2 from "./SlidesImages/img2.jpg";
import img3 from "./SlidesImages/img3.jpg";

const Home = () => {
  return (
    <>
      <section className="home">
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
      </section>
      <section id="features">
        <div className="title">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 offset-md-1">
                <div className="features-middle">
                  <h2>Our Special Features</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam, commodi laudantium? Qui modi culpa assumenda minus?
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="feature-img">
                  <img
                    src="https://www.socialbuzzing.co.uk/wp-content/uploads/2018/03/Seven-Characteristics-of-Highly-Effective-Digital-Marketing-Team.png"
                    alt="...."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid margin-top-up ipad-px-30 pb-4">
          <div className="row">
            <div className="col-sm-12 col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <div className="single-feature">
                    <h4>Pure and simple</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut dolorem quia expedita ratione.
                    </p>
                    <div className="feature-icon">
                      <FaTree />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="single-feature">
                    <h4>Beautiful Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut dolorem quia expedita ratione.
                    </p>
                    <div className="feature-icon">
                      <FaAirFreshener />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5">
                  <div className="single-feature">
                    <h4>Color Schemes</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut dolorem quia expedita ratione.
                    </p>
                    <div className="feature-icon">
                      <FaHome />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5">
                  <div className="single-feature">
                    <h4>Animations</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut dolorem quia expedita ratione.
                    </p>
                    <div className="feature-icon">
                      <FaBellSlash />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="single-feature">
                    <h4>Easy to customize</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut dolorem quia expedita ratione.
                    </p>
                    <div className="feature-icon">
                      <BsFillGearFill />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="single-feature">
                    <h4>Excellent Everything</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut dolorem quia expedita ratione.
                    </p>
                    <div className="feature-icon">
                      <BsCloudArrowDownFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
