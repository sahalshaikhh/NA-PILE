import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/logo/Logo.png";
import "./Navbar.css";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PrecisionManufacturingTwoToneIcon from "@mui/icons-material/PrecisionManufacturingTwoTone";
import { Button } from "@mui/material";

function Navbar() {
  const [icon, setIcon] = useState(true);

  const hamBurgerClicked = () => {
    const showData = document.querySelector(".list-items");
    showData.classList.toggle("hidden");

    if (icon) {
      setIcon(false);
    } else {
      setIcon(true);
    }
  };

  return (
    <>
      <motion.div
        className="main-nav sm:flex "
        initial={{ opacity: 0, y: -100 }} // Initial state of the Navbar
        animate={{ opacity: 1, y: 0 }} // Final state when the Navbar appears
        transition={{ duration: 1 }}
      >
        <div className="nav-section-1 flex justify-between px-8 items-center text-center ">
          {/* Logo */}
          <motion.div
            className="logo text-3xl font-bold sm:w-[10vw] md:w-[12vw] lg:w-[10vw] xl:w-[5vw] cursor-pointer"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={Logo} className="Logo" alt="Logo NA-Pile" />
          </motion.div>
          {/* Logo End */}

          {/* Ham-Burger Menu Start */}
          <motion.div
            className="ham-burger sm:hidden"
            onClick={hamBurgerClicked}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {icon ? (
              <PrecisionManufacturingTwoToneIcon fontSize="large" />
            ) : (
              <PrecisionManufacturingIcon fontSize="large" />
            )}
            {/* Correct usage of the icon component */}
          </motion.div>
          {/* Ham Burger Manu End */}
        </div>
        {/* NavList Start */}
        <div className="list-items text-center sm:flex sm:w-full sm:justify-evenly sm:text-xs md:text-base lg:text-xl xl:text-2xl">
          <ul className="nav-lists gap-8 mt-4 sm:flex sm:gap-4 sm:justify-center sm:items-center sm:mt-0 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a href="/">Strength</a>
            </li>
          </ul>
          <div className="btn pt-2 pb-8 sm:mx-4 sm:p-0 sm:flex sm:justify-center sm:items-center lg:hidden">
            <Button
              size="small"
              variant="outlined"
              sx={{
                backgroundColor: "#adadad", // Set background color to black
                fontFamily: "Cardo",
                // paddingBlock: "5px",
                color: "black", // Set text color to white
                border: "1px solid black",
                "&:hover": {
                  backgroundColor: "black", // Set background color to white on hover
                  color: "#adadad", // Set text color to black on hover
                  border: "none",
                },
              }}
            >
              {" "}
              Contact Us
            </Button>
          </div>
        </div>

        <div className="btn-sm pt-2 pb-8 max-sm:hidden max-md:hidden max-lg:hidden lg:w-[10%]  lg:flex  lg:justify-center lg:items-center lg:p-0 lg:text-xl  text-black">
          <Button
            size="small"
            variant="outlined"
            sx={{
              backgroundColor: "#adadad", // Set background color to black
              fontFamily: "Cardo",
              // paddingBlock: "5px",
              color: "black", // Set text color to white
              border: "1px solid black",
              "&:hover": {
                backgroundColor: "black", // Set background color to white on hover
                color: "#adadad", // Set text color to black on hover
                border: "none",
              },
            }}
          >
            {" "}
            Contact Us
          </Button>
        </div>
        {/* NavList Ends */}
      </motion.div>
    </>
  );
}

export default Navbar;
