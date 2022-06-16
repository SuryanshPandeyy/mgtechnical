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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          mattis ligula eget nulla euismod maximus. Vestibulum ac accumsan
          tortor, nec lobortis arcu. Quisque ultrices tincidunt lorem sed
          volutpat. Aliquam erat volutpat. Fusce vulputate nulla vitae
          sollicitudin consectetur. Cras aliquam augue a ante luctus tempus.
          Vestibulum placerat dapibus nibh, id mattis erat mattis vel. Nam sit
          amet finibus nisi.
        </p>
      </div>
    </div>
  );
};

export default About;
