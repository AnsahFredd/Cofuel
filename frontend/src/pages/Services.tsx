import React from "react";
import EventPlanningSection from "../components/EventPlanningSection";
import "../styles/Services.css";
import ServicesHeader from "../components/ServicesHeader";
const Services = () => {
  return (
    <div className="service__container w-full h-full relative">
      <ServicesHeader
        title="Our Services"
        subtitle="Cofuel events specializes in a wide range of styling services"
        color="text-yellow-500"
      />
      <EventPlanningSection />
    </div>
  );
};

export default Services;
