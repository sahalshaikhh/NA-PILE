import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./service.css";
import { Button } from "@mui/material";
import MachineCard from "../../components/our-machinery-card/MachineCard";
import AugarManualMethod from "../../assets/photos/Augar_menual_method.jpg";
import PileCage from "../../assets/photos/PileCage.jpg";
import Underreamer from "../../assets/photos/Underreamer.jpg";
import SheetPile from "../../assets/photos/sheet_pile.jpg";
import DrillingSheet from "../../assets/photos/rotary_pile.webp";
import dmc from "../../assets/photos/DMC.jpg";
import Compound_Wall_Piling from "../../assets/photos/compound_wall_pile.jpg";
import diaphragm_wall_pile from "../../assets/photos/diaphragm_wall_pile.jpg";
import Footer from "../../components/footer/Footer";

function Service() {
  return (
    <>
      {/* Nav Section Start */}
      <Navbar bgColor="#181717" />
      {/* Nav Section Ends */}

      <div className="service-container-main mt-14 sm:mt-[5.8rem] lg:mt-[7.8rem] xl:mt-[6rem] ">
        <div className="hero-setion-service relative -z-10">
          <h1 className="service-heading absolute top-8 left-8 text-4xl text-black font-[Cardo] sm:left-28 sm:text-[5rem] sm:top-16 lg:left-52 xl:left-60 xl:text-8xl xl:top-4">
            SERVICES
          </h1>
          <p className="service-title absolute top-[4.5rem] text-black sm:text-4xl sm:top-32 lg:right-[34rem] xl:right-[50rem] xl:text-6xl xl:top-32">
            We Offer
          </p>
        </div>
        <div className="btn absolute right-8 top-[12.5rem] -z-0 sm:mx-4 sm:p-0 sm:bottom-0 sm:flex sm:justify-center sm:items-center">
          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#adadad", // Set background color to black
              fontFamily: "Cardo",
              fontSize: "10px",
              // paddingBlock: "5px",
              color: "black", // Set text color to white

              "&:hover": {
                backgroundColor: "black", // Set background color to white on hover
                color: "#adadad", // Set text color to black on hover
                border: "none",
              },
            }}
          >
            Contact Us
          </Button>
        </div>
        <div className="xl-screens-responsive xl:flex xl:flex-col">
          <div className="sm:flex sm:gap-4 lg:hidden">
            <MachineCard
              name="MANUAL AUGER METHORD"
              containt="The manual auger method, also known as hand augering, is a traditional and basic technique used in construction and drilling applications. It involves using a tool called an 'auger' to bore holes in the ground or other materials manually, without the need for powered machinery. This method has been employed for centuries and is still used in various contexts today."
              img={AugarManualMethod}
            />
            <MachineCard
              name="PILE CAGE"
              containt="These Pile Cages are used in ‘Drilled Piers’ or “Cast-in- drilled-hole piles (CIDH piles) or Cast-in-Situ piles. Rotary boring techniques are used (dry boring or wet boring) to drill holes in the soil and upon reaching the design depth, a reinforcing cage (pile cage) is lowered into the bore."
              img={PileCage}
            />
          </div>{" "}
          <div className="sm:flex sm:gap-4 lg:hidden">
            <MachineCard
              name="UNDERREAMER"
              containt="An underreamer is a device used to enlarge the borehole below an existing casing or restriction, during a well drilling operation. It can be positioned either above the drill bit or above a pilot assembly run inside the existing borehole. Numerous designs exist, in sizes varying from a couple of inches to above 40."
              img={Underreamer}
            />
            <MachineCard
              name="SHEET PILE"
              containt="Sheet piles are sections of sheet materials with interlocking edges that are driven in the ground to maintain the earth retention and provide excavation support. Sheet piles are usually made of steel, but can also be made of wood or reinforced concrete."
              img={SheetPile}
            />{" "}
          </div>
          <div className="sm:flex sm:gap-4 lg:hidden">
            <MachineCard
              name="ROTATORY PILE"
              containt="By utilising a telescopic kelly bar our large rotary rigs create the pile bore through the removal of the soil in sections, approximately a metre deep, until the design depth has been reached. At this stage full depth reinforcement cages, steel sections or permanent casings can be easily installed prior to the placement of concrete. Where piles are used for deep basements it may be permissible to leave the concrete at a low level in order to reduce pile trimming."
              img={DrillingSheet}
            />
            <MachineCard
              name="DMC PILE"
              containt="DMC piling means Direct Mud Circulation piling. Here Installation of Pile Foundation is done Using Direct Mud Circulation Method (DMC). Direct Mud Circulation method is best suited when sufficient working-space is available for piling."
              img={dmc}
            />
          </div>{" "}
          <div className="sm:flex sm:gap-4 lg:hidden">
            <MachineCard
              name="COMPOUND WALL PILING"
              containt="VME’s compound wall are engineered to suit to different customer requirements. Compound walls will be used as boundary walls, high rise security walls with barbed wires, grills etc., or as a simple low height and cost effective walls to divide the boundary between two properties or as decorative walls. The price spent on these walls depends on the type of application and customer needs."
              img={Compound_Wall_Piling}
            />
            <MachineCard
              name="DIAPHRAGM WALL PILE"
              containt="VME’s compound wall are engineered to suit to different customer requirements. Compound walls will be used as boundary walls, high rise security walls with barbed wires, grills etc., or as a simple low height and cost effective walls to divide the boundary between two properties or as decorative walls. The price spent on these walls depends on the type of application and customer needs."
              img={diaphragm_wall_pile}
            />
          </div>
          <div className=" hidden  lg:flex">
            <MachineCard
              name="MANUAL AUGER METHORD"
              containt="The manual auger method, also known as hand augering, is a traditional and basic technique used in construction and drilling applications. It involves using a tool called an 'auger' to bore holes in the ground or other materials manually, without the need for powered machinery. This method has been employed for centuries and is still used in various contexts today."
              img={AugarManualMethod}
            />
            <MachineCard
              name="PILE CAGE"
              containt="These Pile Cages are used in ‘Drilled Piers’ or “Cast-in- drilled-hole piles (CIDH piles) or Cast-in-Situ piles. Rotary boring techniques are used (dry boring or wet boring) to drill holes in the soil and upon reaching the design depth, a reinforcing cage (pile cage) is lowered into the bore."
              img={PileCage}
            />
            <MachineCard
              name="UNDERREAMER"
              containt="An underreamer is a device used to enlarge the borehole below an existing casing or restriction, during a well drilling operation. It can be positioned either above the drill bit or above a pilot assembly run inside the existing borehole. Numerous designs exist, in sizes varying from a couple of inches to above 40."
              img={Underreamer}
            />
          </div>
          <div className=" hidden lg:flex">
            <MachineCard
              name="SHEET PILE"
              containt="Sheet piles are sections of sheet materials with interlocking edges that are driven in the ground to maintain the earth retention and provide excavation support. Sheet piles are usually made of steel, but can also be made of wood or reinforced concrete."
              img={SheetPile}
            />
            <MachineCard
              name="ROTATORY PILE"
              containt="By utilising a telescopic kelly bar our large rotary rigs create the pile bore through the removal of the soil in sections, approximately a metre deep, until the design depth has been reached. At this stage full depth reinforcement cages, steel sections or permanent casings can be easily installed prior to the placement of concrete. Where piles are used for deep basements it may be permissible to leave the concrete at a low level in order to reduce pile trimming."
              img={DrillingSheet}
            />
            <MachineCard
              name="DMC PILE"
              containt="DMC piling means Direct Mud Circulation piling. Here Installation of Pile Foundation is done Using Direct Mud Circulation Method (DMC). Direct Mud Circulation method is best suited when sufficient working-space is available for piling."
              img={dmc}
            />
          </div>
          <div className="hidden lg:flex">
            <MachineCard
              name="COMPOUND WALL PILING"
              containt="VME’s compound wall are engineered to suit to different customer requirements. Compound walls will be used as boundary walls, high rise security walls with barbed wires, grills etc., or as a simple low height and cost effective walls to divide the boundary between two properties or as decorative walls. The price spent on these walls depends on the type of application and customer needs."
              img={Compound_Wall_Piling}
            />
            <MachineCard
              name="DIAPHRAGM WALL PILE"
              containt="VME’s compound wall are engineered to suit to different customer requirements. Compound walls will be used as boundary walls, high rise security walls with barbed wires, grills etc., or as a simple low height and cost effective walls to divide the boundary between two properties or as decorative walls. The price spent on these walls depends on the type of application and customer needs."
              img={diaphragm_wall_pile}
            />
          </div>
        </div>
      </div>

      {/* End of main section */}
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Service;
