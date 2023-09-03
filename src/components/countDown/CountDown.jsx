import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CountUpSection() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="count-up flex justify-between item-center text-center bg-white text-[#181717] my-12 p-4 sm:py-12 sm:px-8 lg:py-8 lg:px-20 cursor-pointer">
      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            setIsVisible(true);
          }
        }}
      >
        <div className="count-item ">
          <CountUp
            end={isVisible ? 1000 : 0}
            duration={2}
            style={{ verticalAlign: "text-bottom", fontSize: "3vw" }}
          />

          {/* Clients */}

          <h4 className="count-label text-sm">Clients</h4>
        </div>
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            setIsVisible(true);
          }
        }}
      >
        <div className="count-item">
          <CountUp
            end={isVisible ? 990 : 0}
            duration={2}
            style={{ verticalAlign: "text-bottom", fontSize: "3vw" }}
          />{" "}
          {/* Satisfied */}
          <h4 className="count-label text-sm">Executed Projects</h4>
        </div>
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            setIsVisible(true);
          }
        }}
      >
        <div className="count-item">
          <CountUp
            end={isVisible ? 886 : 0}
            duration={2}
            style={{ fontSize: "3vw" }}
          />{" "}
          {/* Monthly Joins */}
          <h4 className="count-label text-sm">Delighted Clients</h4>
        </div>
      </VisibilitySensor>
    </div>
  );
}

export default CountUpSection;
