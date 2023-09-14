import React from "react";

function AboutCard(props) {
  return (
    <div>
      <div
        className={`card-about-main text-black m-8 rounded-2xl w-[18rem] mx-auto 
       sm:flex sm:w-[90%] sm:m-auto sm:my-12 
       xl:w-[65%] ${props.lgresponse} 
       `}
        style={{ backgroundColor: props.bgColor }}
      >
        <div className="photo sm:w-full">
          <img
            src={props.img}
            alt="working leaders of na pile"
            style={{ height: "100%" }}
          />
        </div>
        <div className="data p-4 sm:w-[200%]">
          <h1 className="text-2xl pb-4 font-bold font-[Jaldi] text-center sm:text-start sm:text-4xl lg:text-4xl">
            {props.name}
          </h1>
          <p className="text-justify font-[Lato] text-xs sm:text-base lg:text-lg">
            {props.job}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
