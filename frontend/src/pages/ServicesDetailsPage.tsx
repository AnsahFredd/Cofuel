import { Link, useParams } from "react-router-dom";
import servicesData from "../constants/servicesData";
import ServicesHeader from "../components/ServicesHeader";
import eventbackimag from "../assets/images/image13.jpg";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
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
        title={service.title}
        color="text-white"
        backgroundImage={eventbackimag}
        height="300px"
      />
      <div className="flex service-container">
        {/* Sidebar 30% */}
        <aside className="w-1/3 p-6 service-sidebar">
          <h1 className="text-2xl font-bold mb-4">Services</h1>

          {/* For Mobile & Tablet Screens */}

          <Link
            to="/services"
            className="all_service_link block lg:hidden text-sm font-semibold text-[#a38e13] border border-[#a38e13] px-4 py-0.5 rounded-full hover:bg-[#a38e13] hover:text-white transition-colors duration-300"
          >
            ← Back to All Services
          </Link>

          {/* For Large Screens and Above */}

          <Link
            to="/services"
            className="all_service_link hidden lg:block all_service_link hover:underline hover:text-[#4d4c4ce0]"
          >
            All Services
          </Link>

          <ul className="services_link">
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
          <p className="mb-4 text-xl">{service.description}</p>

          <div className="w-full flex flex-col justify-center items-center mt-4 space-y-1">
            <h2
              className="text-center text-[48px] mb-8 services-header-text"
              style={{
                fontFamily: "'Luxurious Script', cursive",
                color: "#ffd700",
                textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              Making Your Events An Occasion To Remember
            </h2>
          </div>
          <div className="relative w-full h-[450px] my-8 overflow-hidden">
            <img
              src={service.images[index]}
              alt="Carousel"
              className="w-full h-full object-cover transition-all duration-700 carousel-img"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default EventServiceDetail;
