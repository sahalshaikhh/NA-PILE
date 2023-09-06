import React from "react";

function AboutCard(props) {
  return (
    <div>
      <div
        className={`card-about-main bg-[#fafafa] text-black m-8 rounded-2xl w-[18rem] mx-auto 
        sm:flex sm:w-[90%] sm:m-auto sm:my-12 sm:${props.photoSet} 
        xl:w-[65%] 
        `}
      >
        <div className="photo sm:w-full">
          <img src={props.img} alt="working leaders of na pile" />
        </div>
        <div className="data p-4 sm:w-[200%]">
          <h1 className="text-2xl pb-4 font-bold font-[Jaldi] text-center sm:text-start sm:text-4xl">
            {props.name}
          </h1>
          <p className="text-justify font-[jaldi] text-sm sm:text-base">
            {props.job}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;