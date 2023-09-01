import React from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import "./home.css";
import CardHome from "../../components/Card-Home/CardHome";
import MyCarousel from "../../components/carousel/Carousel";
import MachineCard from "../../components/our-machinery-card/MachineCard";
import SANY_SR235 from "../../assets/photos/SANY_SR235.jpg";
import SANY_SR155 from "../../assets/photos/SANY_SR155.jpg";
import INDIAN_MAIT_120 from "../../assets/photos/INDIAN_MAIT_120.jpeg";
import SOILMEC_SR_40_MAIT from "../../assets/photos/SOILMEC_SR_40_MAIT.webp";
import { Button } from "@mui/material";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0 } },
  };

  return (
    <>
      <div className="main-container">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              className="container-semimain"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <h1 className="home-heading text-black text-[4rem] w-full text-center font-bold">
                NA Piles
              </h1>
              <p className="home-para text-[#adadad] text-lg w-full text-center font-light">
                Piling Excellence Since 1995.
              </p>
            </motion.div>
          )}
        </VisibilitySensor>
      </div>
      <div className="we-offer py-8">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={headingVariants}
            >
              <h1 className="what-we-offer text-center font-semibold text-3xl mb-8">
                What We Offer
              </h1>
            </motion.div>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              className="offers flex justify-center items-center flex-col gap-4"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <CardHome Heading="CONSTRUCTION OF PILES" img="photo-1" />
              <CardHome Heading="DRILLING RIGS" img="photo-2" />
              <CardHome
                Heading="GEO-TECHNICAL SOIL INVESTIGATION"
                img="photo-3"
              />
              <CardHome Heading="CLICK FOR MORE..." img="photo-4" />
            </motion.div>
          )}
        </VisibilitySensor>
      </div>
      <div className="client-testimonials">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={headingVariants}
            >
              <h1 className="what-we-offer text-center font-semibold text-3xl mb-8">
                Client Testimonials
              </h1>
            </motion.div>
          )}
        </VisibilitySensor>
        <div className="past-client flex justify-center items-center mb-8">
          <MyCarousel />
        </div>
      </div>

      <hr className="text-[#adadad] my-8 w-[50%] mx-auto" />

      <div className="machinery">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={headingVariants}
            >
              <h1 className="what-we-offer text-center font-semibold text-3xl mb-8">
                Our Machinery
              </h1>
              <MachineCard
                name="SANY SR235"
                containt="  SANY SR235 C10 rotary drilling rig has a maximum pile diameter of
            2,000 mm and a maximum pile depth of 68/54 m. It has a
            high-efficiency rotary drive, ensuring smooth and uninterrupted
            operations. It has options for friction Kelly and interlocking kelly
            made of high-strength steel."
                img={SANY_SR235}
              />
              <MachineCard
                name="SANY SR155"
                containt="WebSR155 is suitable for small and medium-sized pile foundation projects in towns, municipal engineering and factory constructions. It has the characteristics of high efficiencyl."
                img={SANY_SR155}
              />

              <MachineCard
                name="INDIAN MAIT 120"
                containt="The HR 120 is a multipurpose compact drilling rig suitable for medium to large diameter drilled shafts, for drilling in any kind of soil by using a rotary system with kelly bar, augers and buckets."
                img={INDIAN_MAIT_120}
              />

              <MachineCard
                name="SOILMEC SR 40 MAIT"
                containt="The HR 120 is a multipurpose compact drilling rig suitable for medium to large diameter drilled shafts, for drilling in any kind of soil by using a rotary system with kelly bar, augers and buckets."
                img={SOILMEC_SR_40_MAIT}
              />
              <div className="btn m-auto text-center">
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#adadad", // Set background color to black
                    fontFamily: "Cardo",
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
            </motion.div>
          )}
        </VisibilitySensor>
      </div>
    </>
  );
}

export default Home;
