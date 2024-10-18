import { useState } from "react";
import "../../assets/style/infinite-card-scroll.css";

const cardsArray = Array.from({ length: 31 }, (_, i) => i);

const InfiniteCardScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleScroll = (event: any) => {
    event.preventDefault();

    if (event.deltaY > 0) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardsArray.length);
    } else {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + cardsArray.length) % cardsArray.length
      );
    }
  };

  return (
    <>
      <div className="infinite-scroll max-xl:overflow-hidden">
        <div className="gallery">
          <ul className="cards" onWheel={handleScroll}>
            {cardsArray.map((card, index) => {
              const isActive = index === activeIndex;
              const isNext1 = index === (activeIndex + 1) % cardsArray.length;
              const isNext2 = index === (activeIndex + 2) % cardsArray.length;
              const isNext3 = index === (activeIndex + 3) % cardsArray.length;
              const isNext4 = index === (activeIndex + 4) % cardsArray.length;
              const isPrev1 =
                index ===
                (activeIndex - 1 + cardsArray.length) % cardsArray.length;
              const isPrev2 =
                index ===
                (activeIndex - 2 + cardsArray.length) % cardsArray.length;
              const isPrev3 =
                index ===
                (activeIndex - 3 + cardsArray.length) % cardsArray.length;
              const isPrev4 =
                index ===
                (activeIndex - 4 + cardsArray.length) % cardsArray.length;

              return (
                <li
                  key={index}
                  className={`card ${isActive ? "active" : ""} ${
                    isNext1 ? "next1" : ""
                  } ${isNext2 ? "next2" : ""} ${isNext3 ? "next3" : ""} ${
                    isPrev1 ? "prev1" : ""
                  } ${isPrev2 ? "prev2" : ""} ${isPrev3 ? "prev3" : ""}`}
                  style={{
                    transform: isActive
                      ? "scale(1) translateX(0)"
                      : isNext1
                      ? "scale(0.8) translateX(100%)"
                      : isNext2
                      ? "scale(0.6) translateX(200%)"
                      : isNext3
                      ? "scale(0.5) translateX(300%)"
                      : isNext4
                      ? "scale(0.3) translateX(200%)"
                      : isPrev1
                      ? "scale(0.8) translateX(-100%)"
                      : isPrev2
                      ? "scale(0.7) translateX(-200%)"
                      : isPrev3
                      ? "scale(0.5) translateX(-300%)"
                       : isPrev4
                      ? "scale(0.3) translateX(-200%)"
                      : "scale(0.5)",
                    opacity: isActive
                      ? 1
                      : isNext1 || isPrev1
                      ? 0.6
                      : isNext2 || isPrev2
                      ? 0.4
                      : isNext3 || isPrev3
                      ? 0.1
                      : isNext4 || isPrev4
                      ? 0
                      : 0,

                    zIndex: isActive ? 10 : isNext1 || isPrev1 ? 5 : 0,
                    margin: isNext2
                      ? "0 200px"
                      : isNext3
                      ? "0 400px"
                      : isPrev2
                      ? "0 -200px"
                      : isPrev3
                      ? "0 -400px"
                      : "0",
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
      <div className="drag-proxy"></div>
    </>
  );
};

export default InfiniteCardScroll;
