import React from "react";
import { motion } from "framer-motion";

const ApplyForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="container mt-5"
    >
      <div className="row my-4">
        <iframe
          title="form"
          width="100%"
          height="1850px"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=KYJsGaVSEkCuAuXGKlet7z1hY1rB2FtLvH1Xwu7VLa9UMlFPMDhWUVNQNlZFTUpBTjI1WVhKQVlYUi4u&embed=true"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ApplyForm;
