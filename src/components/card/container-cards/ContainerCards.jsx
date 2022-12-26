import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../../variants/containerVariants";

const ContainerCards = ({ children }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container-cards side-padding"
    >
      {children}
    </motion.div>
  );
};

export default ContainerCards;
