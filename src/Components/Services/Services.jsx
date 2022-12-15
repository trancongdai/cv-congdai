import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}> My Awesome</span>
        <span> services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          aliquam voluptate iusto dolore modi molestias quibusdam numquam
          consequatur nobis, tempore, laboriosam dolor officia? Asperiores
          dolores sed fugit labore molestias
          <br />
          tempore, laboriosam dolor officia? Asperiores dolores sed fugit labore
          molestias
        </span>
        <a href={Resume} download>
          <button className="button s-button"> Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ background: "#abf1ff94", width: "21rem", height: "11rem" }}
        ></div>
      </div>
      <div className="cards">
        <motion.div
          whileInView={{ left: "22rem" }}
          initial={{ left: "90%" }}
          transition={transition}
          style={{ left: "22rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Canva"}
          />
        </motion.div>

        <motion.div
          whileInView={{ left: "3rem" }}
          initial={{ left: "90%" }}
          transition={transition}
          style={{ left: "4rem", top: "12rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascrips, Reactjs,..."}
          />
        </motion.div>
        <motion.div
          whileInView={{ left: "22rem" }}
          initial={{ left: "90%" }}
          transition={transition}
          style={{ left: "22rem", top: "22rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Html, Css, Javascrips, Reactjs,..."}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{
            background: "var(--purple)",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
