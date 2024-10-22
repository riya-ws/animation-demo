import { Link } from "react-router-dom";
import { SliderDemoData } from "../../utils/constant";

const Home = () => {
  return (
    <div className="my-5 flex flex-col gap-6">
      {SliderDemoData.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <h1 className="text-2xl font-medium">{item.title}</h1>
            <Link
              to={item.path}
              className="text-lg font-medium hover:text-blue-600 hover:underline"
            >
              {item.description}
            </Link>
          </div>
        );
      })}
      {/* <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium"> Demo 1 :</h1>
        <Link
          to="/arrow-card-stack-swipe"
          className="text-lg font-medium hover:text-blue-600 hover:underline"
        >
          Arrow card stack swipe
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium"> Demo 2 :</h1>
        <Link
          to="/on-scroll-sticky-card-stack"
          className="text-lg font-medium hover:text-blue-600 hover:underline"
        >
          on scroll sticky card stack
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium"> Demo 3 : </h1>
        <Link
          to="/sticky-scroll-reveal"
          className="text-lg font-medium hover:text-blue-600 hover:underline"
        >
          Sticky scroll reveal
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium"> Demo 4 : </h1>
        <Link
          to="/infinite-scrolling-card"
          className="text-lg font-medium text-center hover:text-blue-600 hover:underline"
        >
          Infinite scrolling,dragging and snapping card
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium"> Demo 5 : </h1>
        <Link
          to="/infinite-logo-slider"
          className="text-lg font-medium hover:text-blue-600 hover:underline"
        >
          Infinite logo slider 
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium"> Demo 6 : </h1>
        <Link
          to="/scroll-driven"
          className="text-lg text-center font-medium hover:text-blue-600 hover:underline"
        >
          Carousals with scroll driven animation
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
