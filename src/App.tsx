import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import ThirdTestimonials from "./assets/components/third-testimonials";
import Work from "./assets/components/work";
import ScrollReveal from "./assets/components/scroll-reveal";
import InfiniteCardScroll from "./assets/components/infinite-card-scroll";
import InfiniteLogo from "./assets/components/infinite-logo";
import ScrollDriven from "./assets/components/scroll-driven";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/arrow-card-stack-swipe"
            element={<ThirdTestimonials />}
          />
          <Route path="/on-scroll-sticky-card-stack" element={<Work />} />
          <Route path="/sticky-scroll-reveal" element={<ScrollReveal />} />
          <Route path="/infinite-scrolling-card" element={<InfiniteCardScroll />} />
          <Route path="/infinite-logo-slider" element={<InfiniteLogo />} />
          <Route path="/scroll-driven" element={<ScrollDriven />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
