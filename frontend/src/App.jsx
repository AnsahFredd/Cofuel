import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";

import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";
import Portfolio from "./pages/Portofolio";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  // Get current route path
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  // Check if the current page is NotFound
  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/about-us" &&
    location.pathname !== "/portfolio_gallery" &&
    location.pathname !== "/services" &&
    !location.pathname.startsWith("/services/") &&
    location.pathname !== "/contact";

  const navBg = isNotFound ? "#000000" : undefined;

  useEffect(() => {
    // Start loading when path changes
    setLoading(true);

    // Simulating network dealy or waiting for actual reosurces
    const handleDelay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(handleDelay);
  }, [location]);
  return (
    <>
      <ScrollToTop />
      {loading && <LoadingScreen />}

      <NavBar backgroundColor={navBg} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicesDetailsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio_gallery" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
