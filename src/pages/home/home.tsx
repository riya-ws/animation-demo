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
    </div>
  );
};

export default Home;
