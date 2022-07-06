import React from "react";
import { motion } from "framer-motion";
import { FaTree, FaAirFreshener, FaHome, FaBellSlash } from "react-icons/fa";
import { BsFillGearFill, BsCloudArrowDownFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <section className="about">
      <motion.div>
        <div
          className="container mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="row about-image mt-2">
            <h1 className="about-title mb-4 text-center">About Us</h1>
            <div className="col-12">
              <div className="about-text">
                <p>
                  <strong>Uvxcel</strong> is contradictorily a startup that has
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
        <section id="features">
          <div className="title">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="features-middle">
                    <h2>Our Special Features</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam, commodi laudantium? Qui modi culpa assumenda
                      minus?
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut dolorem quia expedita ratione.
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut dolorem quia expedita ratione.
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut dolorem quia expedita ratione.
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut dolorem quia expedita ratione.
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut dolorem quia expedita ratione.
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ut dolorem quia expedita ratione.
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
      </motion.div>
    </section>
  );
};

export default AboutUs;
