import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DataIntegration from "./pages/data-integration/data-integration";
const SpotagencyDoing = lazy(
  () => import("./pages/spotagency-doing/spotagency-doing")
);
const Rotation = lazy(() => import("./pages/card-rotation/rotation"));
const Loading = lazy(() => import("./components/loading"));
const Home = lazy(() => import("./pages/home/home"));
const ThirdTestimonials = lazy(
  () => import("./pages/third-testimonials/third-testimonials")
);
const InfiniteLogo = lazy(() => import("./pages/infinite-logo/infinite-logo"));
const Work = lazy(() => import("./pages/work/work"));
const InfiniteCardScroll = lazy(
  () => import("./pages/infinite-card-scroll/infinite-card-scroll")
);
const ScrollDriven = lazy(() => import("./pages/scroll-driven/scroll-driven"));
const ScrollDrivenDemoTwo = lazy(
  () => import("./pages/scroll-driven-demo-two/scroll-driven-demo-two")
);
const ScrollDrivenDemoThree = lazy(
  () => import("./pages/scroll-driven-demo-three/scroll-driven-demo-three")
);
const ScrollReveal = lazy(() => import("./pages/scroll-reveal/scroll-reveal"));
const FlexCard = lazy(() => import("./pages/flex-card/flex-card"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/arrow-card-stack-swipe"
              element={<ThirdTestimonials />}
            />
            <Route path="/on-scroll-sticky-card-stack" element={<Work />} />
            <Route path="/sticky-scroll-reveal" element={<ScrollReveal />} />
            <Route
              path="/infinite-scrolling-card"
              element={<InfiniteCardScroll />}
            />
            <Route path="/infinite-logo-slider" element={<InfiniteLogo />} />
            <Route path="/scroll-driven" element={<ScrollDriven />} />
            <Route
              path="/scroll-driven-demo-two"
              element={<ScrollDrivenDemoTwo />}
            />
            <Route
              path="/scroll-driven-demo-three"
              element={<ScrollDrivenDemoThree />}
            />
            <Route path="/flex-card" element={<FlexCard />} />
            <Route path="/card-rotation" element={<Rotation />} />
            <Route path="/spot-agency-doing" element={<SpotagencyDoing />} />
            <Route path="painless-data-integration" element={<DataIntegration />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
