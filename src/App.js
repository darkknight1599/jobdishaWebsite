import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import HomeTwo from "./pages/HomeTwo/HomeTwo";
// import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
// import Team from "./pages/Team/Team";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeTwo />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesDetails" element={<ServicesDetails />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
