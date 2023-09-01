import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-material-ui-carousel";

function MyCarousel() {
  const carouselSettings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop back to the beginning after reaching the end
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per transition
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 3000, // Auto-play interval in milliseconds
  };

  return (
    <div className="w-[85%]">
      <Slider {...carouselSettings}>
        {/* <Carousel> */}
        <div className="bg-[#0000004f] text-white p-4 w-[90%] m-auto">
          <h1
            className="text-xl font-extrabold text-start my-2"
            style={{ fontFamily: "Nunito", textShadow: "2px 2px 2px black" }}
          >
            Suresh Bhai Shah
          </h1>
          <p
            className="text-xs font-thin my-2 text-start"
            style={{ fontFamily: "Jaldi", textShadow: "2px 2px 2px black" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            qui! Minus, velit beatae ratione fuga nam excepturi soluta inventore
            commodi quod eius, voluptate dicta eaque molestiae sit aut nesciunt
            in, sequi vel!
          </p>
        </div>
        <div className="bg-[#0000004f] text-white p-4 w-[90%] m-auto">
          <h1
            className="text-xl font-extrabold text-start my-2"
            style={{ fontFamily: "Nunito", textShadow: "2px 2px 2px black" }}
          >
            Raju Seth
          </h1>
          <p
            className="text-xs font-thin my-2 text-start"
            style={{ fontFamily: "Jaldi", textShadow: "2px 2px 2px black" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut
            corporis quo, aliquam ipsum tempore fuga enim sint rem doloremque
            natus totam eligendi!
          </p>
        </div>
        <div className="bg-[#0000004f] text-white p-4 w-[90%] m-auto">
          <h1
            className="text-xl font-extrabold text-start my-2"
            style={{ fontFamily: "Nunito", textShadow: "2px 2px 2px black" }}
          >
            Sahal Developer
          </h1>
          <p
            className="text-xs font-thin my-2 text-start"
            style={{ fontFamily: "Jaldi", textShadow: "2px 2px 2px black" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum
            facilis aspernatur totam sit quos accusantium consequuntur
            praesentium doloremque. Debitis facere, temporibus blanditiis
            distinctio necessitatibus autem? Culpa atque nisi a nobis laboriosam
            veritatis perferendis!
          </p>
        </div>
        <div className="bg-[#0000004f] text-white p-4 w-[90%] m-auto">
          <h1
            className="text-xl font-extrabold text-start my-2"
            style={{ fontFamily: "Nunito", textShadow: "2px 2px 2px black" }}
          >
            Khan Bhai
          </h1>
          <p
            className="text-xs font-thin my-2 text-start"
            style={{ fontFamily: "Jaldi", textShadow: "2px 2px 2px black" }}
          >
            Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sapiente, quod. Nesciunt quam, laudantium vel
            natus deserunt maxime recusandae ipsam, tempora dolor vero nulla a,
            velit commodi cupiditate molestiae ad nobis eum. Sunt odit vitae
            impedit ipsam veritatis laborum consequuntur! Sint ea consequatur
            possimus vitae ipsam?
          </p>
        </div>
        {/* </Carousel> */}
      </Slider>
    </div>
  );
}

export default MyCarousel;
