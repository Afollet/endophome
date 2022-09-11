import { render } from "react-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DataPortalPage } from "./pages/DataPortalPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { SpeciesPage } from "./pages/SpeciesPage";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<DataPortalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/species/:species_name" element={<SpeciesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
