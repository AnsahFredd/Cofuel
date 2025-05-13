import React from "react";
import PortfolioGallery from "../components/PortfolioGallery";
import portfolioBackground from "../assets/images/image16.jpg";

const Portofolio = () => {
  return (
    <div className="w-full h-full">
      <div className="header-background  w-full h-[450px] overflow-hidden">
        <img
          src={portfolioBackground}
          alt=""
          className="w-full h-[450px] object-cover"
        />
      </div>
      <PortfolioGallery />
    </div>
  );
};

export default Portofolio;
