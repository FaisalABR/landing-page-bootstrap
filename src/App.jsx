import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKeten from "./pages/SyaratKeten";
import FaqPage from "./pages/FaqPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/syaratketen" Component={SyaratKeten} />
        <Route path="/faq" Component={FaqPage} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
