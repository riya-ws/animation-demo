import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="my-5 flex flex-col gap-6">
      <div className="flex flex-col items-center">
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
    </div>
  );
};

export default Home;
