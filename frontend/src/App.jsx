import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";
import Portfolio from "./pages/Portofolio";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  // Get current route path
  const location = useLocation();

  // Check if the current page is NotFound
  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/about-us" &&
    location.pathname !== "/portfolio_gallery" &&
    location.pathname !== "/services" &&
    !location.pathname.startsWith("/services/") &&
    location.pathname !== "/contact";

  const navBg = isNotFound ? "#000000" : undefined;

  return (
    <>
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
