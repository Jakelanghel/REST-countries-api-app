import React, { useState } from "react";
import { StyledDropDown } from "./DropDown.Styled";
import { motion, AnimatePresence } from "framer-motion";
import { fetchAPI } from "../../../services/fetchAPI";

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen((oldState) => !oldState);
  };

  const onClick = (e) => {
    toggleDropDown();
    props.filterByRegion(e);
  };

  const dropDownVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.1 },
    },
  };
  return (
    <StyledDropDown>
      <div className="container-dropdown">
        <div className="dropdown-select">
          <p className="label">Filter by Region</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="arrow-img"
            onClick={toggleDropDown}
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              variants={dropDownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="dropdown-options bs-1 dropdown-box">
                <p className="option" onClick={onClick}>
                  Africa
                </p>
                <p className="option" onClick={onClick}>
                  America
                </p>
                <p className="option" onClick={onClick}>
                  Asia
                </p>
                <p className="option" onClick={onClick}>
                  Europe
                </p>
                <p className="option" onClick={onClick}>
                  Oceania
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </StyledDropDown>
  );
};

export default DropDown;
