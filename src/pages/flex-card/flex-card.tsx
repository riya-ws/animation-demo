import "./flex-card.css";
import { useState } from "react";
import { FlexCardData } from "../../utils/constant";
import { Link } from "react-router-dom";

const FlexCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: any) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="box-area flex-card">
        {FlexCardData.map((place, index) => (
          <div
            key={index}
            className={`box ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <img src={place.img} alt={place.title} />
            <i className={place.iconClass}></i>
            <h2>{place.title}</h2>
            <p>{place.description}</p>
          </div>
        ))}
      </div>

      <div className="container mx-auto my-20 flex flex-col items-center">
        <h1 className="text-4xl max-md:text-xl text-center font-bold pb-5">
          Reference website :{" "}
          <Link
            target="_blank"
            to="https://codepen.io/mirazulislam/pen/MWGRjmK"
          >
            Demo
          </Link>
        </h1>
        <h2 className="text-xl text-center">
          Status: The section functions smoothly and is fully responsive.
          <p>
            <b>Note </b>: Please click on the demo to navigate to the reference demo.
          </p>
        </h2>
      </div>
    </>
  );
};

export default FlexCard;
