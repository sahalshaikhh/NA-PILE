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
    <div className="w-[85%] xl:h-[20rem]">
      <Slider {...carouselSettings}>
        {/* <Carousel> */}
        <div className="bg-[#0000004f] text-white p-4 w-[90%] m-auto sm:py-16 ">
          <h1
            className="text-xl font-extrabold text-start my-2 sm:text-2xl lg:text-4xl"
            style={{ fontFamily: "Nunito", textShadow: "2px 2px 2px black" }}
          >
            goyal & co
          </h1>
          <p
            className="text-xs font-thin my-2 text-start sm:text-sm lg:text-xl"
            style={{ fontFamily: "Jaldi", textShadow: "2px 2px 2px black" }}
          >
            NA Piling Works exceeded my expectations! Their commitment to
            excellence and decades of experience in piling and foundation
            construction truly shine through in their work. I had the pleasure
            of working with their team on a challenging project, and their
            dedication to quality, safety, and efficiency was evident every step
            of the way. NA Piling Works isn't just a contractor; they're a
            reliable partner you can trust for all your piling needs. I highly
            recommend their services to anyone seeking top-notch piling
            solutions.
          </p>
        </div>
        <div className="bg-[#0000004f] text-white p-4 w-[90%] m-auto sm:py-16 ">
          <h1
            className="text-xl font-extrabold text-start my-2 sm:text-2xl lg:text-4xl"
            style={{ fontFamily: "Nunito", textShadow: "2px 2px 2px black" }}
          >
            vande mataram construction
          </h1>
          <p
            className="text-xs font-thin my-2 text-start  sm:text-sm lg:text-xl"
            style={{ fontFamily: "Jaldi", textShadow: "2px 2px 2px black" }}
          >
            I recently hired NA Piling Works for a crucial foundation project,
            and I'm thrilled with the results. From the very beginning, their
            team demonstrated a deep understanding of the complexities involved
            in piling work. What sets them apart is their commitment to
            innovation, using state-of-the-art equipment and techniques. The
            project was completed on time, and the quality of their work speaks
            for itself. I was impressed not only with their technical expertise
            but also their professionalism and dedication to client
            satisfaction. NA Piling Works is undoubtedly a leader in the
            industry, and I wholeheartedly recommend them for any piling and
            foundation needs.
          </p>
        </div>
        <div className="bg-[#0000004f] text-white p-4 w-[90%] m-auto sm:py-16">
          <h1
            className="text-xl font-extrabold text-start my-2 sm:text-2xl lg:text-4xl"
            style={{ fontFamily: "Nunito", textShadow: "2px 2px 2px black" }}
          >
            Star Construction
          </h1>
          <p
            className="text-xs font-thin my-2 text-start sm:text-sm lg:text-xl"
            style={{ fontFamily: "Jaldi", textShadow: "2px 2px 2px black" }}
          >
            I had the pleasure of working with NA Piling Works for a challenging
            construction project, and they exceeded my expectations in every
            way. Their team's expertise in pile foundation construction is truly
            unmatched. What I appreciated most was their attention to detail and
            commitment to precision. They didn't just complete the job; they
            ensured that every aspect of the project was done flawlessly. From
            the initial consultation to project completion, their
            professionalism and dedication to quality were evident. NA Piling
            Works is the go-to choice for anyone seeking top-tier piling and
            foundation solutions. I couldn't be happier with the results, and I
            highly recommend their services.
          </p>
        </div>
        <div className="bg-[#0000004f] text-white p-4 w-[90%] m-auto sm:py-16">
          <h1
            className="text-xl font-extrabold text-start my-2 sm:text-2xl lg:text-4xl"
            style={{ fontFamily: "Nunito", textShadow: "2px 2px 2px black" }}
          >
            Ambika Construction
          </h1>
          <p
            className="text-xs font-thin my-2 text-start sm:text-sm lg:text-xl "
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
