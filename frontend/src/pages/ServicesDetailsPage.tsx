import { Link, useParams } from "react-router-dom";
import servicesData from "../constants/servicesData";
import ServicesHeader from "../components/ServicesHeader";
import eventbackimag from "../assets/images/image13.jpg";
import { useEffect, useState } from "react";
import NotFound from "../pages/NotFound";
import "../styles/ServicesDetails.css";

const EventServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (service?.images.length || 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [!service]);

  if (!service) return <NotFound />;

  return (
    <div className="flex flex-col">
      <ServicesHeader
        title="Event Planning"
        color="text-white"
        backgroundImage={eventbackimag}
      />
      <div className="flex min-h-screen service-container">
        {/* Sidebar 30% */}
        <aside className="w-1/3 p-6 service-sidebar">
          <h1 className="text-2xl font-bold mb-4">Services</h1>
          <Link className="all_service_link" to="/services">
            All Services
          </Link>

          <ul className="space-y-2">
            {servicesData.map((s) => (
              <li key={s.slug}>
                <a href={`/services/${s.slug}`} className="hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content 70% */}
        <main className="w-2/3 p-6 service-main">
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <p className="mb-4">{service.services}</p>

          <div className="w-full flex flex-col justify-center items-center mt-4 space-y-1">
            <h2
              className="text-[#ffdf00] text-center text-[50px] mb-8 services-header-text"
              style={{ fontFamily: "'Luxurious Script', cursive" }}
            >
              Making Your Events An Occasion To Remember
            </h2>

            <div className="relative w-full h-[350px]  overflow-hidden main-img-container">
              <img
                src={service.mainimage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
            </div>
          </div>
          <div className="relative w-full h-[400px] my-8 overflow-hidden">
            <img
              src={service.images[index]}
              alt="Carousel"
              className="w-full h-full object-cover transition-all duration-700 carousel-img"
            />
            <div className="absolute w-full h-[400px] inset-0 bg-black opacity-50 "></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EventServiceDetail;
