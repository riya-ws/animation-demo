import "./App.css";
// import SimpleSlider from './assets/components/home-slider';
import HomeSlider from "./assets/components/home-slider";
import TestimonialStack from "./assets/components/testimonial-stack";
import Testimonials from "./assets/components/testimonials";
import ThirdTestimonials from "./assets/components/third-testimonials";
import StickyLayers from "./assets/components/work";
import Work from "./assets/components/work";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <SimpleSlider /> */}
      {/* <HomeSlider /> */}
      {/* <h1 className="text-xl font-medium text-center my-3">First demo</h1>
      <Testimonials/> */}
      {/* <h1 className="text-xl font-medium text-center my-3">Second demo</h1>
      <TestimonialStack /> */}
      <h1 className="text-xl font-medium text-center my-3">Third demo</h1>
      <ThirdTestimonials />
      {/*On scroll how to works section*/}
      {/* <StickyLayers /> */}
    </>
  );
}

export default App;
