
import "./flex-card.css";
import { useState } from "react";
import { FlexCardData } from "../../utils/constant";

const FlexCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index:any) => {
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
    </>
  );
};

export default FlexCard;
