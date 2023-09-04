import { Button } from "@mui/material";
import React from "react";
import "./CardHome.css";

function CardHome(props) {
  return (
    <>
      <div
        className={`${props.img} images-main-headig text-black flex justify-center items-center font-bold text-2xl w-[90%] m-auto sm:m-auto sm:mb-4 cursor-pointer`}
      >
        <div className="style-div px-4 text-center flex-col relative">
          <h1 className="font-black">{props.Heading}</h1>
          <div className="hidden hidden-know-more absolute bottom-10">
            <Button
              className=""
              size="small"
              variant="outlined"
              sx={{
                backgroundColor: "#adadad", // Set background color to black
                fontFamily: "Cardo",
                border: "none",
                color: "black", // Set text color to white
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
      </div>
    </>
  );
}

export default CardHome;
