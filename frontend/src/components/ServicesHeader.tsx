import React from "react";
import service_backimg from "../assets/images/image20.jpg";

interface Props {
  title: string;
  subtitle?: string;
  color: string;
  backgroundImage?: string;
  height?: string;
}

const ServiceHeader: React.FC<Props> = ({
  title,
  subtitle,
  color,
  backgroundImage,
  height = "450px",
}) => {
  return (
    <div className="header-background relative bg-cover bg-no-repeat h-full">
      <div className="relative w-full" style={{ height }}>
        <img
          src={backgroundImage || service_backimg}
          alt=""
          className="object-cover w-full h-full"
        />
        <div
          className="absolute top-0 left-0  w-full bg-black opacity-60 backdrop-blur-sm z-0"
          style={{ height }}
        ></div>
      </div>

      <div className="title-container absolute inset-0 flex flex-col items-center justify-center text-center space-y-2 px-4">
        <h1
          className={`${color} lg:text-6xl md:text-5xl text-3xl font-bold text-center`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-[32px] md:text-[20px] sm:text-[18px] xs:text-[16px]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceHeader;
