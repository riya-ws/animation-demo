import { useEffect, useState, CSSProperties } from "react";
import { WorkData } from "../../utils/constant";
import "./work-slider.css";
import { Link } from "react-router-dom";
import Referencevideo from "../../video/sticky-card-stack.webm";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [flexDirection, setFlexDirection] =
    useState<CSSProperties["flexDirection"]>("row");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );
    const cardElements = document.querySelectorAll(".card");
    cardElements.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardElements.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  useEffect(() => {
    const updateFlexDirection = () => {
      if (window.innerWidth < 768) {
        setFlexDirection("column");
      } else {
        setFlexDirection("row");
      }
    };

    updateFlexDirection(); 

    window.addEventListener("resize", updateFlexDirection);
    return () => window.removeEventListener("resize", updateFlexDirection);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-col my-28">
        <h1 className="text-3xl font-bold text-black">How it Works</h1>
        <p className="text-[#6b6875] text-xl font-medium max-md:text-center">
          Experience personalised insights and effortless financial management.
        </p>
        <div className="flex flex-col mt-16">
          {WorkData.map((item, index: number) => {
            const isActive = activeIndex === index;
            const scaleVal = isActive ? 1.0 : 0.8;
            const translateY = isActive ? `-20px` : `0`;

            // Define styles for each card
            const stickyStyle: CSSProperties = {
              alignItems: "center",
              borderRadius: "40px",
              display: "flex",
              flex: "none",
              flexDirection: "row",
              gap: "60px",
              height: "min-content",
              justifyContent: "center",
              maxWidth: "1280px",
              minHeight: "75vh",
              padding: "40px",
              position: "sticky",
              top: "80px",
              width: "100%",
              willChange: "transform",
              zIndex: 1,
            };
            // const topValue = 40 + index * 5;

            return (
              <div
                key={index}
                className={`h-[500px] mb-14 flex justify-center items-center gap-60 max-md:flex-col account-wrapper`}
                style={{
                  ...stickyStyle,
                  flexDirection,
                  transform: `scale(${scaleVal}) translateY(${translateY})`,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  opacity: isActive ? 0.6 : 1.2,
                  // top: `${topValue}px`,
                }}
                data-index={index}
              >
                <img
                  className="border-[2px] rounded-3xl border-black"
                  src={item.image}
                  alt="workSection"
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-5xl font-bold max-w-[500px]">
                    {item.title}
                  </h1>
                  <p className="text-lg font-normal max-w-60">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto my-20 flex flex-col items-center">
        <h1 className="text-4xl max-md:text-xl text-center font-bold pb-3">
          Reference website :{" "}
          <Link
            target="_blank"
            to="https://fintro.framer.ai/"
          >
            Demo
          </Link>
        </h1>
        <h2 className="text-xl pb-3 text-center">
          Status: The section functions smoothly and is fully responsive.
        </h2>

        <video width="750" height="500" controls>
          <source src={Referencevideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Work;
