import React from "react";
import { motion } from "framer-motion";
import { AiFillDatabase } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import Aos from "aos";

const AboutUs = () => {
  Aos.init();
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
      <section className="promo-section py-lg-5">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-left"
              data-aos-duration="600"
            >
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

            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-left"
              data-aos-duration="1400"
            >
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

            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-left"
              data-aos-duration="1800"
            >
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
