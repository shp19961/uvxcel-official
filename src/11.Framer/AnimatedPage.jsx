import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ApplyForm from "../10.ApplyJob/ApplyForm";
import Home from "../2.HomePage/Home";
import AboutUs from "../3.About/AboutUs";
import Services from "../4.Services/Services";
import Technologies from "../5.Technologies/Technologies";
import Careers from "../6.Careers/Careers";
import ContactUs from "../7.Contact/ContactUs";

const AnimatedPage = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/applyform" element={<ApplyForm />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedPage;
