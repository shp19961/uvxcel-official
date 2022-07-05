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
      className="container services-container"
    >
      <div className="d-flex justify-content-center">
        <h1 className="mb-4 serv-ttl">Our Services</h1>
      </div>
      <div className="row mt-2 service-row justify-content-center">
        {services.map((service) => (
          <div className="col-6 col-md-6 col-lg-4" key={service.title}>
            <div className="card serv-card shadow shadow-sm p-3 mb-4 bg-body rounded">
              <img
                src={service.img}
                className="card-img-top serv-card-img-top"
                alt="..."
              />
              <div className="card-body serv-card-body">
                <h5 className="card-title serv-card-title">{service.title}</h5>
                <p className="card-text serv-card-text">{service.parag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
