import { useEffect, useRef, useState } from "react";
import { stickyRevealData } from "../../utils/constant";
import stickyReveal from "../../assets/linear.png";

const ScrollReveal = () => {
  const [currentItem, setCurrentItem] = useState(stickyRevealData[0]);
  const sectionRef = useRef<(HTMLDivElement | null)[]>([]);
  const [bgGradient, setBgGradient] = useState(
    "linear-gradient(to bottom right, #FF007A, #6A00FF)"
  );

  const gradients = [
    "linear-gradient(to bottom right, #FF007A, #6A00FF)",
    "linear-gradient(to bottom right, #FFA500, #FFFF00)",
  ];

  useEffect(() => {
    const handleScroll = () => {
      sectionRef.current.forEach((section, index) => {
        if (
          section &&
          section.getBoundingClientRect().top < window.innerHeight / 2
        ) {
          setCurrentItem(stickyRevealData[index]);
          setBgGradient(gradients[index % gradients.length]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [gradients]);

  return (
    <>
      <div
        className={`bg-black flex w-full gap-10 my-10 overflow-y-hidden ${
          currentItem.title === "Real time changes"
            ? "bg-black"
            : "bg-[#0f172a]"
        }`}
      >
        <div className="overflow-y-auto flex justify-center flex-col relative space-x-10 p-10 rounded-md container mx-auto">
          <div className="flex w-full">
            {/* Left Content */}
            <div className="flex flex-col gap-10 items-start w-[60%]">
              {stickyRevealData.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full"
                  ref={(el) => (sectionRef.current[index] = el)}
                >
                  <div
                    className={`flex flex-col gap-10 items-start w-[60%] transition-all duration-500 ${
                      currentItem.title === item.title
                        ? "text-white opacity-100"
                        : "text-gray-400 opacity-50"
                    }`}
                  >
                    <h1 className="text-4xl font-bold">{item.title}</h1>
                    {/* <p className="text-4xl font-bold">{item.content}</p> */}
                    <p className="text-lg font-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Sticky Box */}
            <div className="w-[40%] flex items-center justify-center">
              <div
                className={`sticky top-20 w-80 h-80 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 z-10 ${
                  currentItem.title === "Real time changes" ? "" : "bg-gradient"
                }`}
                style={{
                  background:
                    currentItem.title === "Real time changes"
                      ? "none"
                      : bgGradient,
                }}
              >
                {currentItem.title === "Real time changes" && (
                  <img
                    src={stickyReveal}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover rounded-2xl"
                    alt="linear board demo"
                  />
                )}
                <h2 className="text-xl font-bold text-center text-white">
                  {currentItem.title !== "Real time changes" &&
                    currentItem.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollReveal;
