import React from "react";
import aboutus_backimg from "../assets/images/image21.jpg";
const About = () => {
  return (
    <div className="w-full h-full">
      <div className="header-background w-full h-[450px]">
        <img
          src={aboutus_backimg}
          alt=""
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
};

export default About;
