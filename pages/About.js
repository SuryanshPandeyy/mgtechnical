import { Divider } from "@mui/material";
import React from "react";
const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutBox" id="company">
        <Divider className="divider">
          <div className="heading"></div>
          <h1>About Us</h1>
        </Divider>
        <p>
          MG Technicals is a Rajatshan based IT Company, offering 360° IT
          solutions and Working as a Creative agency and doing some different
          type of innovations. Mohit gaur is Founder and CEO of MG Technicals,
          MG Technicals is serving in Whole india with successful customer
          History of Many national corporations since 2017
        </p>
        <p>
          Mg Technicals is not only IT group or service providing brand but also
          Finding new ways to make easy the technology in our life, we are also
          working on some E-products ,Online Tools and some android apps.... WE
          are also working as a Creative agency and Pruduction House of Digital
          Ads, tools ,Motions and more..
        </p>
      </div>
    </div>
  );
};

export default About;
