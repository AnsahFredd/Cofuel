import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "./PorfolioGallery.css";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";
import image9 from "../assets/images/image9.jpg";
import image10 from "../assets/images/image10.jpg";
import image11 from "../assets/images/image11.jpg";
import image12 from "../assets/images/image12.jpg";
import image13 from "../assets/images/image13.jpg";
import image14 from "../assets/images/image14.jpg";
import image15 from "../assets/images/white-purple-balloons.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

const slides = images.map((src, index) => ({
  src,
  alt: `Porfolio ${index + 1}`,
}));

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1,
};

const PortfolioGallery = () => {
  const [index, setIndex] = useState(-1); //Lightbox closed by default

  return (
    <section className="px-4 py-10 bg-white min-h-screen">
      <h2
        className="text-4xl   font-bold text-center text-gray-800 mb-10"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Our Event Portfolio
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Portfolio ${idx + 1}`}
            loading="lazy"
            onClick={() => setIndex(idx)}
            className="rounded-lg w-full object-cover mb-4 shadow hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer"
          />
        ))}
      </Masonry>

      {/* Lightbox Component */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        className="portfolio-lightbox"
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: false,
          disableSwipeNavigation: true,
        }}
        render={{
          buttonClose: () => (
            <button
              onClick={() => setIndex(-1)}
              className="custom-close-button absolute top-4 right-4 text-white text-4xl font-bold z-50 hover:text-gray-300 transition"
            >
              &times;
            </button>
          ),
        }}
      />
    </section>
  );
};

export default PortfolioGallery;
