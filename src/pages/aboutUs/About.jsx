import React from "react";
import "./about.css";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeroVid from "../../assets/photos/SecondAboutUs.mp4";
import OwnerPic from "../../assets/photos/OwnerOfNaPile.jpeg";
import MemberPic from "../../assets/photos/member_one.jpeg";
import MemberPicTwo from "../../assets/photos/MemberPicTwo.jpeg";
import AboutCard from "../../components/aboutCard/AboutCard";

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0 } },
  };

  const OpacityVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0 } },
  };
  return (
    <div>
      {/* Navbar */}
      <div className="navbar mt-12 sm:mt-20 md:mt-[5.5rem] lg:mt-[5.8rem]">
        <Navbar bgColor="#181717" />
      </div>
      {/* Navbar ends */}

      {/* 
      width: 90%;
    font-size: 3rem;
    line-height: 1.3; */}

      {/* about us section starts  */}
      <div className="Containent flex justify-center items-center flex-col">
        <div className="vid relative w-full sm:w-full">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <motion.div
                className=""
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={OpacityVariants}
              >
                <video
                  autoPlay
                  muted
                  loop
                  id="background-video"
                  playbackRate={0.5}
                  className="vid-hero-about relative -z-10"
                >
                  <source src={HeroVid} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </VisibilitySensor>
          <div className="heading-about-main absolute top-[0%] h-full -z-10 w-full text-center p-4 bg-[#00000063] flex justify-center items-center">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <motion.div
                  className="about-heading text-center text-2xl sm:text-3xl sm:bg-[#0000004f] sm:p-4 lg:w-[90%] lg:text-5xl "
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={containerVariants}
                >
                  Forging Dreams into Concrete Reality: Our Journey from 1995 to
                  Building Excellence
                </motion.div>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={headingVariants}
              className="w-full"
            >
              <h1
                className="legacy text-center font-semibold text-lg px-4 pt-8 mb-8 sm:text-4xl cursor-pointer
              lg:text-5xl  lg:mt-28 lg:mb-28 lg:bg-[#181717] lg:py-8 lg:underline
              xl:text-4xl  xl:my-24 "
              >
                Our Legacy of Excellence: Shaping Foundations Since 1995.
              </h1>
            </motion.div>
          )}
        </VisibilitySensor>
        <div className="into-owner-business">
          <AboutCard
            bgColor={"#fafafa"}
            img={OwnerPic}
            name="Our Story:"
            job=" Founded by Abdul Rauf Shaikh in 1995, NA-Pile began as a dream
                that has now evolved into a construction and piling powerhouse.
                With a humble start, Abdul Rauf also known as Nasir laid the
                groundwork for a legacy defined by quality and innovation.
                Today, armed with a fleet of advanced machinery and having
                served over 1000 clients, we stand as a beacon of expertise in
                the industry. As we embrace the future, we honor our beginnings
                by delivering projects that reflect our commitment to precision
                and our founder's vision for excellence."
          />
        </div>
        <div className="team-members">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={headingVariants}
              >
                <h1 className="team-members-heading mt-8 text-center font-semibold text-3xl mb-8 sm:text-4xl lg:text-5xl  lg:mt-28 lg:mb-28 lg:bg-[#181717] lg:py-8  xl:text-4xl  xl:my-24 ">
                  Team Members
                </h1>
                <div className="">
                  <AboutCard
                    bgColor={"#fafafa"}
                    photoSet="flex-row-reverse"
                    img={MemberPic}
                    name="Aadil Shaikh"
                    job=" Aadil Shaikh is the driving force behind NA Pile's commitment to
            excellence in the construction industry. As a Project Supervisor, he
            brings over decade of industry experience and a hands-on approach to
            every project. With a passion for quality and a keen eye for detail,
            Aadil ensures that every construction site reflects the high
            standards set by NA Pile since 1995. His mentorship, commitment to
            safety, and dedication to innovation make him an integral part of
            the team, pushing the company to continually exceed expectations and
            remain at the forefront of the construction industry."
                  />
                  <AboutCard
                    bgColor={"#fafafa"}
                    img={MemberPicTwo}
                    name="Nadeem Shaikh"
                    job="Nadeem Shaikh is a vital asset to NA Pile, following in the footsteps of his family's 
                  construction legacy. As a key team member, Nadeem plays a crucial role in liaising with clients,
                  ensuring their needs and expectations are met with the utmost professionalism and care. His ability
                  to bridge the gap between clients and the construction team is unmatched, creating a seamless experience
                  for all involved. Nadeem brings a fresh perspective to the family business, combining traditional values
                  with a modern approach to client satisfaction. With a commitment to building lasting relationships and 
                  delivering exceptional service, Nadeem is a rising star in the construction industry and an essential
                  part of NA Pile's continued success."
                  />
                </div>
              </motion.div>
            )}
          </VisibilitySensor>
        </div>
      </div>
      <div className="happy-clients">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={headingVariants}
            >
              <h1 className="team-members-heading mt-8 text-center font-semibold text-3xl mb-8 sm:text-4xl lg:text-5xl  lg:mt-28 lg:mb-28 lg:bg-[#181717] lg:py-8  xl:text-4xl  xl:my-24  ">
                CLIENTS
              </h1>
            </motion.div>
          )}
        </VisibilitySensor>
        <div className="flex bg-white py-8 mt-8 mb-24 justify-between px-4 xl:p-20 cursor-pointer">
          <div className="adani h-[5vh] w-[20vw] xl:h-[8vh]"></div>
          <div className="goyal h-[5vh] w-[20vw] xl:h-[8vh] "></div>
          <div className="shilp h-[5vh] w-[20vw] xl:h-[8vh] "></div>
          <div className="L-T h-[5vh] w-[20vw] xl:h-[8vh] "></div>
        </div>
      </div>
      {/* about us section ends   */}

      {/* Footer Starts */}
      <div className="footer">
        <Footer />
      </div>
      {/* Footer end */}
    </div>
  );
}

export default About;
