import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import ThirdTestimonials from "./pages/third-testimonials/third-testimonials";
import Work from "./pages/work/work";
import InfiniteCardScroll from "./pages/infinite-card-scroll/infinite-card-scroll";
import InfiniteLogo from "./pages/infinite-logo/infinite-logo";
import ScrollDriven from "./pages/scroll-driven/scroll-driven";
import ScrollDrivenDemoTwo from "./pages/scroll-driven-demo-two/scroll-driven-demo-two";
import ScrollDrivenDemoThree from "./pages/scroll-driven-demo-three/scroll-driven-demo-three";
import ScrollReveal from "./pages/scroll-reveal/scroll-reveal";

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
          <Route path="/scroll-driven-demo-two" element={<ScrollDrivenDemoTwo />} />
          <Route path="/scroll-driven-demo-three" element={<ScrollDrivenDemoThree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
