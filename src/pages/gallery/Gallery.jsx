import React from "react";
import "./gallery.css";
import Navbar from "../../components/navbar/Navbar";
import SANY_SR235 from "../../assets/photos/SANY_SR235.jpg";
import SANY_SR155 from "../../assets/photos/SANY_SR155.jpg";
import INDIAN_MAIT_120 from "../../assets/photos/INDIAN_MAIT_120.jpeg";
import SOILMEC_SR_40_MAIT from "../../assets/photos/SOILMEC_SR_40_MAIT.webp";
import AboutCard from "../../components/aboutCard/AboutCard";
import Tractor from "../../assets/photos/Tractor.jpg";
import Tmr_rig from "../../assets/photos/Tmr_rig.jpg";
import escort_hydra from "../../assets/photos/escort_hydra.jpg";
import JCB from "../../assets/photos/JCB.jpg";
import Footer from "../../components/footer/Footer";
import WhatsaapComponent from "../../components/whatsaapCom/WhatsaapComponent";

function Gallery() {
  return (
    <>
      <WhatsaapComponent />
      <div className="nav mb-14">
        <Navbar bgColor="#181717" />
      </div>

      <div className="gallery text-[#181717] flex justify-center items-center flex-col text-5xl font-[Cardo] font-extrabold gap-2 md:text-8xl xl:gap-0 ">
        <h1 className="xl:bg-slate-50 xl:p-4">PRODUCT </h1>
        <span className="xl:bg-red-200 xl:p-2">GALLERY</span>
      </div>
      <div className="main-container-gallery">
        <AboutCard
          bgColor="#fafafa"
          img={SANY_SR235}
          name="SANY SR235"
          job="
          The Sany SR235 is a powerful and versatile heavy-duty excavator, renowned for its robust engine, impressive excavation capacity,
           and operator-centric design. With a strong and efficient diesel engine, it excels in various construction and earthmoving 
           tasks, offering exceptional digging depth and reach. The spacious, ergonomic cabin prioritizes operator comfort and safety,
            equipped with advanced controls and amenities. Its durability, owing to sturdy construction and high-quality materials, 
            ensures longevity even in challenging work environments. Furthermore, its adaptability, facilitated by a range of
             attachments and accessories, allows it to handle diverse construction projects with precision and efficiency, making it a
              valuable asset for construction professionals."
        />
        <AboutCard
          bgColor="#fafafa"
          lgresponse="lg:flex-row-reverse"
          photoSet="flex-row-reverse"
          img={SANY_SR155}
          name="SANY SR155"
          job="The Sany SR155 is a compact and versatile excavator designed for a wide range of construction and excavation
           tasks. It features a reliable and fuel-efficient engine, delivering sufficient power for digging and lifting operations. 
           With its compact size and maneuverability, the SR155 is well-suited for jobs in tight or confined spaces, such as urban construction 
           projects or landscaping tasks. Its operator-friendly cabin offers comfort and excellent visibility, enhancing productivity
            and safety. This excavator's durable construction ensures longevity and reliability in demanding work environments. Overall,
             the Sany SR155 is a dependable and adaptable machine for various construction applications."
        />{" "}
        <AboutCard
          bgColor="#fafafa"
          photoSet="flex-row-reverse"
          img={INDIAN_MAIT_120}
          name="INDIAN MAIT 120"
          job="The INDIAN MAIT 120 is a heavy-duty piling rig designed for deep foundation and construction projects. Known for its robust performance, it is equipped with a powerful engine and advanced drilling technology, allowing it to efficiently bore deep holes for piling, foundation construction, and other specialized tasks. The MAIT 120 is capable of handling a variety of soil and rock conditions, making it versatile for a wide range of construction applications. Its operator-friendly design includes a comfortable cabin with modern controls for precision and safety. With its durability and high-performance capabilities, the INDIAN MAIT 120 is a reliable choice for demanding construction and infrastructure projects."
        />
        <AboutCard
          bgColor="#fafafa"
          photoSet="flex-row-reverse"
          lgresponse="lg:flex-row-reverse"
          img={SOILMEC_SR_40_MAIT}
          name="SOILMEC_SR_40_MAIT"
          job="
          The SOILMEC SR 40 MAIT is a renowned and powerful drilling rig used primarily in geotechnical and foundation engineering. With a sturdy build and a high-performance engine, it excels in drilling deep foundation piles, CFA (Continuous Flight Auger) piles, and diaphragm walls, making it an ideal choice for large-scale construction projects. Its advanced drilling technology and automation features enable precise and efficient drilling operations, while its operator-friendly cabin offers comfort and safety during extended work hours. The SOILMEC SR 40 MAIT is recognized for its durability, versatility, and the ability to handle a variety of soil and rock conditions, making it a valuable asset for demanding geotechnical and foundation engineering tasks."
        />{" "}
        <AboutCard
          bgColor="#fafafa"
          photoSet="flex-row-reverse"
          img={Tractor}
          name="TRACTOR"
          job="A piling tractor is a specialized construction vehicle primarily used for the installation of piles in foundation and infrastructure projects. These machines are equipped with a powerful engine and a hydraulic hammer or pile driver attachment, enabling them to drive piles deep into the ground with precision and force. Piling tractors are essential for creating stable foundations in various construction applications, including buildings, bridges, and offshore structures. They are known for their efficiency, accuracy, and ability to handle different types of piles, making them crucial equipment in the construction industry."
        />{" "}
        <AboutCard
          bgColor="#fafafa"
          lgresponse="lg:flex-row-reverse"
          photoSet="flex-row-reverse"
          img={Tmr_rig}
          name="TMR RIG"
          job="A TMR (Total Mixed Ration) Rig is a specialized construction designed for the efficient mixing and distribution of feed for livestock in the agricultural industry. These rigs typically consist of a large mixing chamber where various ingredients like hay, grains, silage, and supplements are combined to create a balanced and homogeneous feed mixture. The TMR rig is equipped with powerful augers or blades to ensure thorough mixing, and it often has the capability to dispense the mixed feed directly into feeding troughs or trailers, streamlining the feeding process and ensuring that animals receive a consistent and nutritionally balanced diet. This technology plays a vital role in modern livestock farming, optimizing animal nutrition and ultimately improving herd health and productivity."
        />
        <AboutCard
          bgColor="#fafafa"
          photoSet="flex-row-reverse"
          img={escort_hydra}
          name="ESCORT_HYDRA"
          job="The Escort Hydra is a versatile and powerful construction equipment designed for a wide range of material handling tasks. Typically equipped with a hydraulic crane or material handling attachment, it can efficiently lift, transport, and place heavy loads, making it invaluable in construction, infrastructure development, and industrial settings. The Escort Hydra's robust design, coupled with its hydraulic capabilities, ensures precision, safety, and efficiency in various material handling applications, making it a valuable asset for heavy-duty construction projects."
        />{" "}
        <AboutCard
          bgColor="#fafafa"
          photoSet="flex-row-reverse"
          lgresponse="lg:flex-row-reverse"
          img={JCB}
          name="JCB"
          job="JCB is a renowned British multinational corporation specializing in the production of construction, agricultural, and industrial equipment. Founded in 1945, JCB is globally recognized for its distinctive yellow machinery, including backhoes, excavators, loaders, and more. Known for innovation and reliability, JCB machines are trusted for their durability and have become industry standards. With a commitment to sustainability, JCB continues to lead the heavy equipment sector with environmentally friendly solutions and serves customers worldwide through an extensive network of dealers and distributors."
        />
      </div>
      <hr className="text-[#adadad] my-8 w-[50%] mx-auto" />

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
