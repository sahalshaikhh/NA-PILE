import React from "react";
import "./footer.css";
import InstaIcon from "../../assets/logo/instagram.png";
import FbIcon from "../../assets/logo/facebook.png";
import TwitterIcon from "../../assets/logo/twitter.png";
import MailIcon from "../../assets/logo/gmail.png";
import {
  EmailOutlined,
  MailLockOutlined,
  PhoneAndroid,
  PhoneBluetoothSpeaker,
} from "@mui/icons-material";

function Footer() {
  return (
    <>
      <div className="footer-main bg-[#181717] flex justify-between flex-col ">
        <div className="left w-[100%]">
          <h1 className="text-md text-center p-2 font-[Cardo] lg:text-4xl lg:py-4">
            Location
          </h1>
          <iframe
            className="h-full w-full lg:h-80 "
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3672.93441799227!2d72.50637437531282!3d22.989438979197043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU5JzIyLjAiTiA3MsKwMzAnMzIuMiJF!5e0!3m2!1sen!2sin!4v1693630183774!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="right flex justify-evenly">
          <div className="social-links text-start cursor-pointer">
            <h1 className="text-xs py-4 text-center lg:text-2xl lg:py-4">
              Network
            </h1>
            <ul className="flex flex-col items-start list-none px-4">
              <span className="text-xs ">(Click to connect)</span>
              <li className="flex gap-2">
                <img src={InstaIcon} alt="" className="w-4 lg:w-8" />
                <span className="text-xs flex justify-center items-center lg:text-base">
                  Instagram
                </span>
              </li>
              <li className="flex gap-2">
                <img src={FbIcon} alt="" className="w-4 lg:w-8" />
                <span className="text-xs flex justify-center items-center lg:text-base ">
                  Facebook
                </span>
              </li>
              <li className="flex gap-2">
                <img src={TwitterIcon} alt="" className="w-4 lg:w-8" />
                <span className="text-xs flex justify-center items-center lg:text-base ">
                  Twitter
                </span>
              </li>
              <li className="flex gap-2">
                <img src={MailIcon} alt="" className="w-4 lg:w-8" />
                <span className="text-xs flex justify-center items-center lg:text-base ">
                  <a href="mailto:napile12@gmail.com">Mail Us</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="contact-links text-start cursor-pointer">
            <h1 className="text-xs py-4 text-center  lg:text-2xl lg:py-4">
              Contact Now
            </h1>
            <ul className="flex flex-col items-start list-none">
              <li className="flex gap-2">
                <PhoneAndroid />
                <span className="text-xs flex justify-center items-center lg:text-base ">
                  +91 87893 54194
                </span>
              </li>
              <li className="flex gap-2">
                <PhoneBluetoothSpeaker />
                <span className="text-xs flex justify-center items-center lg:text-base">
                  +91 95585 45798
                </span>
              </li>
              <li className="flex gap-2">
                <MailLockOutlined />
                <span className="text-xs flex justify-center items-center lg:text-base">
                  <a href="mailto:napile12@gmail.com" className="lg:text-base">
                    na.pile1995@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="address hidden xl:block w-[20%] cursor-pointer">
            <h1 className="text-xs py-4 text-center  lg:text-2xl lg:py-4">
              Address
            </h1>
            <p>
              Office: Near Muhammadi Masjid Jamiyat Ahle Hadees, Juhapura,
              Muhammadi Masjid Rd, Makarba, Ahmedabad, Gujarat 380051
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className=" mx-auto mb-4 cursor-pointer text-xs text-center flex flex-col gap-1 md:text-sm ">
          <div className="developers bg-white text-black font-[Cardo] px-2 rounded">
            This Website is Developed by - CodeYuwa Developers <br />
          </div>
          <div className="contact-developer">CONTACT - 7041928040 &nbsp;</div>
          <div className="mail-developer">
            <a
              href="mailto:shaikhsahal4@gmail.com"
              className="developer-contact"
            >
              <EmailOutlined /> MAIL - shaikhsahal4@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
