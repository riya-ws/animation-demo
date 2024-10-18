import { useState } from "react";
import "../../assets/style/infinite-card-scroll.css";

const cardsArray = Array.from({ length: 31 }, (_, i) => i);

const InfiniteCardScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start from the middle

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cardsArray.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < cardsArray.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="infinite-scroll">
      <div className="gallery">
        <ul className="cards">
          {cardsArray.map((card, index) => {
            // Calculate classes for scaling and zIndex based on the active card
            const isActive = index === activeIndex;
            const isNext = index === (activeIndex + 1) % cardsArray.length;
            const isPrev =
              index ===
              (activeIndex - 1 + cardsArray.length) % cardsArray.length;

            return (
              <li
                key={index}
                className={`card ${isActive ? "active" : ""} ${
                  isNext ? "next" : ""
                } ${isPrev ? "prev" : ""}`}
                style={{
                  transform: isActive
                    ? "scale(1) translateX(0)"
                    : isNext
                    ? "scale(0.8) translateX(150%)"
                    : isPrev
                    ? "scale(0.8) translateX(-150%)"
                    : "scale(0.5)",
                  opacity: isActive ? 1 : 0.5,
                  zIndex: isActive ? 10 : 0,
                }}
              >
                {card}
              </li>
            );
          })}
        </ul>
        <div className="actions flex gap-5">
          <button
            className="text-white bg-amber-300 w-16 h-16 rounded-xl"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="text-white bg-amber-300 w-16 h-16 rounded-xl"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCardScroll;
