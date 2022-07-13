import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillDatabase } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import Aos from "aos";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="about"
    >
      <section>
        <div className="container mb-5">
          <div className="row about-image mt-2">
            <h1 className="about-title mb-4 text-center">About Us</h1>
            <div className="col-12">
              <h2 className="mb-md-3 mb-2 fw-bold">Company Overview</h2>
              <div className="about-text">
                <p>
                  <strong>uvXcel</strong> is contradictorily a startup that has
                  been set up by a group of like minded friends with collective
                  professional experience of over a century (About 140 years and
                  counting) in various domains and computer science
                  technologies.
                </p>
                <p>
                  Each individual comes from similar culture, family background,
                  academic qualification and more importantly withstrong trust,
                  values, principles, ethics and ambitions.The core is to
                  leverage the discrete yet associated experience to partner
                  with our clients/ businesses to simplify their operations,
                  provide advanced technology frameworks to make their business
                  processes efficient, and enable them to self propel through
                  smart cognitive digital solutions.
                </p>
                <p>
                  The wide variety of expertise ranging from Infrastructure
                  Services, Business Intelligence, Data Architecture &
                  Enterprise Applications, eCommerce, eLearning, Mobile
                  Applications, AI & ML and IoT simply implies that uvXcel has a
                  lot to offer under one umbrella.
                </p>
                <p>
                  We aim to emerge as the preferred technology partner for our
                  clients/ businesses, by powering them through innovative
                  focused solutions for their real life problems with the right
                  blend of time, cost and quality that will assure the projected
                  growth.
                </p>
                <p>
                  We strongly believe that the right partnership and
                  collaboration lays the foundation for sustained growth and
                  excellence, thus <b>United We Excel</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision-mission">
        <div className="container my-5">
          <h2 className="mb-4 fw-bold">Mission, Vision &amp; Value</h2>

          <div className="row bottom-content d-flex justify-content-center">
            <div className="col-md-4 col-12">
              <div
                className="card mb-4 mb-md-0"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img
                  className="card-img-top"
                  src="http://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/1-4.jpg"
                  alt="Awesome "
                />
                <div className="card-body">
                  <h4 className="card-title text-center"> Our Mission </h4>
                  <p className="card-text">
                    We aim to emerge as the preferred technology partner for our
                    clients, by powering them through innovative focused
                    solutions for their real life problems.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-12"
              data-aos="fade-left"
              data-aos-duration="1400"
            >
              <div className="card mb-4 mb-md-0">
                <img
                  className="card-img-top"
                  src="http://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/2-4.jpg"
                  alt="Awesome "
                />
                <div className="card-body">
                  <h4 className="card-title text-center"> Our Vision </h4>
                  <p className="card-text">
                    Know how to pursue pleasure rationally encounter
                    consequences that are extremely painful nor again is there
                    anyone or pursues.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-12 "
              data-aos="fade-left"
              data-aos-duration="1800"
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src="http://fastwpdemo.com/demo/consultive/wp-content/uploads/2022/04/3-4.jpg"
                  alt="Awesome "
                />
                <div className="card-body">
                  <h4 className="card-title text-center"> Our Values </h4>
                  <p className="card-text">
                    Know how to pursue pleasure rationally encounter
                    consequences that are extremely painful nor again is there
                    anyone or pursues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="fw-bold mb-4">Our Partners</h2>

        <OwlCarousel
          autoplayTimeout={3000}
          dotsEach
          fluidSpeed
          autoplaySpeed={2000}
          className="owl-theme"
          items={3}
          loop
          margin={4}
          autoplay={true}
          nav
        >
          <div className="item border">
            <img
              src="http://wp3.commonsupport.com/newwp/statistics/wp-content/uploads/2016/12/1-4.jpg"
              alt="...."
            />
          </div>
          <div className="item border">
            <img
              src="http://wp3.commonsupport.com/newwp/statistics/wp-content/uploads/2016/12/2-4.jpg"
              alt="...."
            />
          </div>
          <div className="item border">
            <img
              src="http://wp3.commonsupport.com/newwp/statistics/wp-content/uploads/2016/12/3-3.jpg"
              alt="...."
            />
          </div>
          <div className="item border">
            <img
              src="http://wp3.commonsupport.com/newwp/statistics/wp-content/uploads/2016/12/4-1.jpg"
              alt="...."
            />
          </div>
          <div className="item border">
            <img
              src="http://wp3.commonsupport.com/newwp/statistics/wp-content/uploads/2016/12/5-1.jpg"
              alt="...."
            />
          </div>
        </OwlCarousel>
      </div>
      <section className="promo-section py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8 col-12">
              <div className="section-heading text-center">
                <h1>Current Engagement</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="row mobile-px-20 mt-2">
            <div className="col-md-6 col-lg-4">
              <div className="single-promo-hover single-promo-1 text-center">
                <div className="circle-icon">
                  <span>
                    <FaHandshake size={45} />
                  </span>
                </div>
                <h5 className="py-3">CUSTOMER OUTREACH</h5>
                <p>
                  Tracking webpages consumption and user behavior to improve the
                  website for better outreach with new and existing customers.
                  Provided managed services to deliver adhoc database
                  development.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-promo-hover single-promo-1 text-center">
                <div className="circle-icon">
                  <span>
                    <AiFillDatabase size={45} />
                  </span>
                </div>
                <h5 className="py-3">DATA SERVICES</h5>
                <p>
                  Built team to perform ongoing standardized framework and
                  configuration based ETL development using SQL Server
                  Integration Services for 35+ clients to track telecom data
                  into a centralized data repository.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-promo-hover single-promo-1 text-center">
                <div className="circle-icon">
                  <span>
                    <RiFileExcel2Fill size={45} />
                  </span>
                </div>
                <h5 className="py-3">BI & DW SOLUTIONS</h5>
                <p>
                  Designed hundreds of facts and dimensions including conformed
                  dimensions and built ETL processes to load them from numerous
                  data sources (files - csv, xml etc and Oracle, MySQL,for
                  different source applications).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
