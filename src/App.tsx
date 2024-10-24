import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import ThirdTestimonials from "./assets/components/third-testimonials";
import Work from "./assets/components/work";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arrow-card-stack-swipe" element={ <ThirdTestimonials />} />
          <Route path="/on-scroll-sticky-card-stack" element={ <Work />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
