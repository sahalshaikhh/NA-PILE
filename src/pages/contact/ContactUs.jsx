import React from "react";
import "./contactUs.css";
import Navbar from "../../components/navbar/Navbar";
// import ContactVid from "../../assets/photos/Contact.MP4";
import ContactForm from "./Form";
import Footer from "../../components/footer/Footer";
import WhatsaapComponent from "../../components/whatsaapCom/WhatsaapComponent";
function ContactUs() {
  return (
    <div>
      <div className="navbar mt-16 md:mt-24 lg:mt-[8rem] xl:mt-[6rem]">
        <Navbar bgColor="#181717" />
      </div>
      <WhatsaapComponent />
      <div className="main-contact md:w-[60%] md:m-auto lg:w-[30%]">
        {/* <video
          autoPlay
          muted
          loop
          id="background-video-contact"
          className="lg:hidden"
        >
          <source src={ContactVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="center-contact-box text-yellow-50 w-[90%] mb-16">
          <h3 className="text-5xl font-[Cardo] font-thin py-4">
            <b>Contact Us</b>
          </h3>
          <div className="form">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
