import React from "react";
import { services } from "./Data";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="services">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="container"
      >
        <h1 className="services-ttl text-center">Our Services</h1>
        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-12 col-md-6 col-lg-4" key={service.title}>
              <div className="card shadow-sm my-4 p-4">
                <img src={service.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title text-success">{service.title}</h6>
                  <p className="card-text">{service.parag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
