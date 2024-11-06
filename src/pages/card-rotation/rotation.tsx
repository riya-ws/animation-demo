import { useEffect, useRef, useState } from "react";
import { RotationCards } from "../../utils/constant";

const Rotation = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [{ startX, startScrollLeft, isDragging }, setDragStart] = useState({
    startX: undefined as any,
    startScrollLeft: undefined as any,
    isDragging: false as any,
  });

  const containerRef = useRef<any>();
  const cardRefs = useRef<any>(new Array());
  const handleMouseDown = (e: any) => {
    setDragStart({
      startX: e.pageX - containerRef.current.offsetLeft,
      startScrollLeft: containerRef.current.scrollLeft,
      isDragging: true,
    });
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging || selectedCard) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = startScrollLeft - walk;
  };

  const selectCard = (card: any) => {
    setSelectedCard(selectedCard ? null : card);

    if (card && !selectedCard) {
      cardRefs.current[card - 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleCardMouseUp = (e: any, card: any) => {
    if (isDragging) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) < 5) selectCard(card);
    } else selectCard(card);
  };

  useEffect(() => {
    const { scrollWidth, clientWidth } = containerRef.current;
    const halfScroll = (scrollWidth - clientWidth) / 2;
    containerRef.current.scrollLeft = halfScroll;
  }, [containerRef.current]);
  return (
    <div>
      {" "}
      <div
        className="h-full w-full flex items-center  xl:max-w-2xl relative"
        onMouseDown={handleMouseDown}
        onMouseUp={() =>
          setDragStart((prev) => ({ ...prev, isDragging: false }))
        }
        onMouseMove={handleMouseMove}
      >
        <div className="absolute left-0 w-32 bg-slate-900 [mask-image:linear-gradient(to_right,white,transparent)] h-full z-30" />
        <div className="absolute right-0 w-32 bg-slate-900 [mask-image:linear-gradient(to_left,white,transparent)] h-full z-30" />
        <div
          className="max-w-[100%] overflow-x-scroll w-full h-full no-visible-scrollbar relative"
          style={{
            whiteSpace: "nowrap",
            perspective: "150px",
          }}
          ref={containerRef}
        >
          {RotationCards.map((card) => (
            <div
              className={`card relative inline-block items-center justify-center h-40 w-40 bg-slate-800 m-10 rounded-md cursor-pointer ${
                selectedCard === card.id ? "bg-slate-700 scale-110" : ""
              }`}
              key={card.id}
              ref={(el) => cardRefs.current.push(el)}
              onMouseUp={(e) => handleCardMouseUp(e, card.id)}
            >
              <div className="h-full w-full flex items-center justify-center">
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rotation;
