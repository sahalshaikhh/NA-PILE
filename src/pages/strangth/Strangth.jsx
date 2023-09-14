import React from "react";
import "./strangth.css";
import strangthList from "./Strangths";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import WhatsaapComponent from "../../components/whatsaapCom/WhatsaapComponent";

export default function Strangth() {
  return (
    <>
      <div className="navbar mt-16 md:mt-24 lg:mt-[6rem]">
        <Navbar bgColor="#181717" />
      </div>
      <WhatsaapComponent />
      <div className="strangth-bg flex justify-center items-center">
        <h2 className="">
          <b className="md:px-28 lg:px-[15rem] lg:text-8xl">Strength</b>
        </h2>
      </div>
      <div className="my-4 lg:flex lg:justify-center">
        <ul className="strangth-list ">
          {strangthList.map((e) => (
            <li key={e.id} className="strangth-list-item">
              <span className="pr-2">
                <LabelImportantIcon />
              </span>
              {e.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
