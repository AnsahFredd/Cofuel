import React from "react";
import servicesData from "../constants/servicesData";
import { Link } from "react-router";
import "./EventPlaning.css";

const EventPlanningSection = () => {
  const displayedServices = servicesData.slice(0, 5);
  return (
    <div className="event_container mt-16 space-y-16 mb-16 layout-container">
      {displayedServices.map((item, index) => (
        <div key={index}>
          <section className="event-planning group relative w-full h-[350px] overflow-hidden hover:cursor-pointer">
            <img
              src={item.mainimage}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay fades away on hover */}
            <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-30 transition-opacity duration-300 backdrop-blur-sm z-0"></div>

            {/* Content stays visible */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1 h-full text-center text-[#FFDF00]">
              <div className="w-full flex flex-col items-center leading-[86px]">
                <h1
                  className="text-[80px]"
                  style={{ fontFamily: "'Luxurious Script', cursive" }}
                >
                  {item.title}
                </h1>
                <div className="w-1/6 h-[1px] bg-[#FFDF00] mb-2"></div>
              </div>
              <button className="px-6 py-2 border-2 mt-5 border-[#ffdf00] text-[#FFDF00] font-semibold hover:bg-[#ffdd0058] hover:text-black transition cursor-pointer">
                <Link to={`/services/${item.slug}`}> Learn more</Link>
              </button>
            </div>
          </section>

          <ul className="mt-5 space-y-1.5 mx-5">
            {item.description.map((service, idx) => (
              <li className="text-xl" key={idx}>
                {service}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EventPlanningSection;
