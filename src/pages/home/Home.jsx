import React, { useState, useEffect } from "react";
import { Puff } from "react-loader-spinner";
// import "react-loader-spinner/dist/puff/css/react-spinner-loader.css";

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
import CountDown from "../../components/countDown/CountDown";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import WhatsaapComponent from "../../components/whatsaapCom/WhatsaapComponent";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading state to false when loading is complete
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0 } },
  };

  return loading ? (
    <div className="flex justify-center items-center h-[100vh]">
      <Puff type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  ) : (
    <div>
      <div className="header">
        <Navbar bgColor="rgba(0, 0, 0, 0.536)" />
      </div>
      {/* Start of Main container */}
      <WhatsaapComponent />
      <div className="main-container xl:bg-black cursor-pointer flex-col">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              className="container-semimain"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <h1 className="home-heading text-black text-[4rem] w-full text-center font-bold sm:text-8xl lg:text-[10rem] xl:text-[12rem]">
                NA Pile
              </h1>
              <p className="home-para text-[#adadad] text-lg w-full text-center font-light sm:text-4xl lg:text-5xl xl:text-4xl">
                Piling Excellence Since 1995.
              </p>
              <p className="absolute bottom-0 bg-black px-4 py-2 rounded-md my-2 cursor-pointer">
                &uarr; &darr; Swip Up &darr; &uarr;
              </p>
            </motion.div>
          )}
        </VisibilitySensor>
      </div>

      {/* End of Main container */}

      {/* Start of Service Section  */}
      <div className="we-offer py-8">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={headingVariants}
            >
              <h1
                className="what-we-offer text-center font-semibold text-3xl mb-8 sm:text-4xl 
              lg:text-5xl  lg:mt-28 lg:mb-28 lg:bg-[#181717] lg:py-8 
              xl:text-4xl  xl:my-24 "
              >
                What We Offer
              </h1>
            </motion.div>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              className="offers flex justify-center items-center flex-col gap-4 sm:flex-row"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <div className="sm:w-[50%] xl:flex xl:gap-0 ">
                <CardHome Heading="CONSTRUCTION OF PILES" img="photo-1" />
                <CardHome Heading="DRILLING RIGS" img="photo-2" />
              </div>
              <div className="sm:w-[50%] xl:flex xl:gap-0">
                <CardHome
                  Heading="GEO-TECHNICAL SOIL INVESTIGATION"
                  img="photo-3"
                />
                <CardHome Heading="CLICK FOR MORE..." img="photo-4" />
              </div>
            </motion.div>
          )}
        </VisibilitySensor>
      </div>
      {/* End of Service Section */}

      {/* Start of Client-Testimonial-Caurosal */}
      <div className="client-testimonials">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={headingVariants}
            >
              <h1 className="what-we-offer text-center font-semibold text-3xl mb-8 sm:text-4xl lg:text-5xl  lg:mt-28 lg:mb-28 lg:bg-[#181717] lg:py-8  xl:text-4xl  xl:my-24 ">
                Client Testimonials
              </h1>
            </motion.div>
          )}
        </VisibilitySensor>
        <div className="past-client flex justify-center items-center mb-8">
          <MyCarousel />
        </div>
      </div>
      {/* End of Client-Testimonial-Caurosal */}

      <hr className="text-[#adadad] my-8 w-[50%] mx-auto sm:w-[10%]" />

      {/* Start of Count Down */}
      <div className="count-down">
        <CountDown />
      </div>
      {/* End of Count Down */}

      {/* Start of Machinery List */}
      <div className="machinery ">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={headingVariants}
            >
              <h1 className="what-we-offer text-center font-semibold text-3xl mb-8 sm:text-4xl  lg:text-5xl  lg:mt-28 lg:mb-28 lg:bg-[#181717] lg:py-8 xl:text-4xl  xl:my-24">
                Our Machinery
              </h1>
              <div className="xl-screens-responsive xl:flex ">
                <div className="sm:flex sm:gap-4">
                  <MachineCard
                    name="SANY SR235"
                    containt="SANY SR235 C10 rotary drilling rig has a maximum pile diameter of
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
                </div>

                <div className="sm:flex sm:gap-4">
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
                </div>
              </div>

              <hr className="text-[#adadad] my-8 w-[50%] mx-auto" />
            </motion.div>
          )}
        </VisibilitySensor>
      </div>
      {/* End of Machinery List */}

      {/* Footer starts */}
      <Footer />
      {/* Footer Ends */}
    </div>
  );
}

export default Home;
