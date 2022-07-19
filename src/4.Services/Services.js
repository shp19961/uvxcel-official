import React from "react";
import { services } from "./Data";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="services mb-5"
    >
      <div className="container">
        <h1 className="services-ttl text-center">Our Services</h1>
        <div className="row">
          {services.map((service) => (
            <div className="col-12 col-md-6 col-lg-4" key={service.title}>
              <div className="my-5">
                <div className="row">
                  <div className="col-4">
                    <img src={service.img} className="card-img-top" alt="..." />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h6 className="card-title text-success">
                        {service.title}
                      </h6>
                      <p className="card-text">{service.parag}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
